const ProjectService = require("../services/Project");
const httpStatus = require("http-status");

const projectService = new ProjectService();

const index = (req, res) => {
  projectService
    .list()
    .then((result) => res.status(httpStatus.OK).send(result))
    .catch((err) => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err));
};

const create = (req, res) => {
  req.body.owner = req.user?._id;
  projectService
    .insert(req.body)
    .then((result) => res.status(httpStatus.CREATED).send(result))
    .catch((err) => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err));
};

const update = (req, res) => {
  projectService
    .modify({ _id: req.params?.id }, { name: req.body?.name })
    .then((result) => res.status(httpStatus.OK).send(result))
    .catch((err) => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err));
};

module.exports = {
  create,
  index,
  update,
};
