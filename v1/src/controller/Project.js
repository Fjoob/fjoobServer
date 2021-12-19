const { insert, list } = require("../services/Project");
const httpStatus = require("http-status");

const index = (req, res) => {
  console.log(req.user);
  list()
    .then((result) => res.status(httpStatus.OK).send(result))
    .catch((err) => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err));
};

const create = (req, res) => {
  insert(req.body)
    .then((result) => res.status(httpStatus.CREATED).send(result))
    .catch((err) => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err));
};

module.exports = {
  create,
  index
};
