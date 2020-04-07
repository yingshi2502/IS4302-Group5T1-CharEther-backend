var stream = require('stream');
let to = require('await-to-js').default;
const db = require('../config/db.config.js');
const Allocation = db.allocations;

exports.createAllocation = (req, res) =>{
    console.log("Create allocation. POSTs");
    let allocationId = req.body.allocationId;
    Allocation.create({
        allocationId:allocationId,
        fileName:req.file.originalname,
        doc:req.file.buffer,
        fileType:req.file.mimetype,
        description:req.body.description
    }).then(()=>{
        res.send("Allocation doc uploaded for transaction id "+allocationId);
    })
}

exports.getAllocationById = async (req, res) => {//retrieving allocation document
	var [err,file] = await to(Allocation.findAll({
		where: {allocationId : req.params.id},
		raw:true
	}))
	if(err)
		res.status(500).send(err)
	if(file.length==0)
		res.status(404).send("No Allocation has been found by this ID");
	else
	{
        file = file[0]
        console.log(file)
		const base64 = new Buffer(file.doc,'binary').toString('base64');
		const imageString = ("data:image/jpeg;base64,"+base64)
		res.send(
			{
				"name": file.fileName,
				"fileType":file.fileType,
				"imgSrcBase64String": imageString
			}
		)
	}
}

exports.downloadAllocationDoc = async (req, res) => {
    Allocation.findAll({ where: { allocationId: req.params.id } }).then(files => {
        if (files.length==0)
            res.status(404).send("No Allocation has been found by this ID");

        let file = files[0];

        var fileContents = Buffer.from(file.doc, "base64");
        var readStream = new stream.PassThrough();
        readStream.end(fileContents);

        res.set('Content-disposition', 'attachment; filename=' + file.fileName);
        res.set('Content-Type', file.fileType);
        readStream.pipe(res);
    })
}


// exports.downloadAllocationDocByDBId = (req, res) => {//only for verifying uploading, not for retrieve doc
//     Allocation.findById(req.params.id).then(file => {
//         var fileContents = Buffer.from(file.doc, "base64");
//         var readStream = new stream.PassThrough();
//         readStream.end(fileContents);

//         res.set('Content-disposition', 'attachment; filename=' + file.fileName);
//         res.set('Content-Type', file.fileType);
//         readStream.pipe(res);
//     })
// }

