var stream = require('stream');

const db = require('../config/db.config.js');
const Allocation = db.allocations;

exports.createAllocation = (req, res) =>{
    console.log("Create allocation. POSTs");
    let allocationId = req.body.allocationId;
    Allocation.create({
        allocationId:allocationId,
        fileName:req.file.originalname,
        doc:req.file.buffer,
        fileType:req.file.mimetype
    }).then(()=>{
        res.send("Allocation doc uploaded for transaction id "+allocationId);
    })
}

exports.downloadAllocationDoc = (req, res) => {//only for verifying uploading, not for retrieve doc
    Allocation.findById(req.params.id).then(file => {
        var fileContents = Buffer.from(file.doc, "base64");
        var readStream = new stream.PassThrough();
        readStream.end(fileContents);

        res.set('Content-disposition', 'attachment; filename=' + file.fileName);
        res.set('Content-Type', file.fileType);

        readStream.pipe(res);
    })
}

