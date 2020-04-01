const db = require('../config/db.config.js');
const Project = db.projects;
const ProjectImage = db.project_images;
let to = require('await-to-js').default;
var stream = require('stream');


exports.createProject = async (req, res) => {
	const [err,resp] = await to(Project.create({
        projectId: req.body.projectId,
        title: req.body.title,
        description: req.body.description,
        status:req.body.status
    }))
	if(err)
		res.status(500).send(err);
	else
		res.send(resp);
}

exports.getProjects = async (req, res) => {
	const [err,resp] = await to(Project.findAll())
	if(err)
		res.status(404).send(err);
	else
		res.send(resp);
}
exports.getProjectById = async (req, res) => {
	const [err,resp] = await to(Project.findAll({
		where: {projectId : req.params.id}
	}))
	if(resp.length==0)
		res.status(404).send("No project has been found by this ID");
	else
		res.send(resp);
}
exports.updateProject = async (req, res) => {
	const [err,resp] = await to(Project.update(req.body,{
		where: {projectId : req.params.id}
	}))
	if(resp[0]==1) //update is successful
	{
		project = await Project.findAll({
			where: {projectId : req.params.id}
		})
		res.status(200).send(project);
	}	
	else
	{
		res.status(404).send("No project by this Id has been found")
	}
	if(err)// internal server error
		res.status(500).send(err);
}
exports.terminateProject = async (req, res) => {
	const [err,resp] = await to(Project.update(
		{status:0},
		{where: {projectId : req.params.id}}
	))
	if(resp[0]==1) //update is successful
	{
		project = await Project.findAll({
			where: {projectId : req.params.id}
		})
		res.status(200).send(project);
	}	
	else
	{
		res.status(404).send("No project by this Id has been found")
	}
	if(err)// internal server error
		res.status(500).send(err);
}

exports.uploadImage = async (req,res) =>{
	let projectId = req.body.projectId;
	// console.log(req);
	ProjectImage.create({
		projectId: projectId,
		caption:req.body.caption,
		image:req.file.buffer,
		name: req.file.originalname,
		type: req.file.mimetype
	}).then(() =>{
		res.send("Image uploaded for project " + projectId);
	})
}

exports.downloadImage = (req, res) => {//only for verifying uploading, not for retrieve image
	ProjectImage.findById(req.params.id).then(file => {
		var fileContents = Buffer.from(file.image, "base64");
		var readStream = new stream.PassThrough();
		readStream.end(fileContents);

		res.set('Content-disposition', 'attachment; filename=' + file.name);
		res.set('Content-Type', file.type);

		readStream.pipe(res);
	})
}