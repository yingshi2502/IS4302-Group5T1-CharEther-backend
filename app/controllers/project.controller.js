const db = require('../config/db.config.js');
const Project = db.projects;
let to = require('await-to-js').default;

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