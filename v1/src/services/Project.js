const Project = require('../models/Project');

const list = () => {
    return Project.find()
}

const insert = (data) => {
    const project = new Project(data);
    return project.save();
}

module.exports={
    list,
    insert
}