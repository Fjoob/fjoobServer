const { insert, list, loginUser } = require("../services/Users");
const httpStatus = require("http-status");
const logger = require("../scripts/logger/Users");

const {
  passwordToHash,
  generateAccessToken,
  generateRefleshToken,
} = require("../scripts/utils/helpers");

const index = (req, res) => {
  list()
    .then((result) => res.status(httpStatus.OK).send(result))
    .catch((err) => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err));
};

const create = (req, res) => {
  insert(req.body)
    .then((result) => res.status(httpStatus.CREATED).send(result))
    .catch((err) => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err));
};

const login = (req, res) => {
  req.body.password = passwordToHash(req.body.password);
  loginUser(req.body)
    .then((user) => {
      if (!user) {
        return res
          .status(httpStatus.NOT_FOUND)
          .send({ message: "User not found" });
      }
      user = {
        ...user._doc,
        tokens: {
          access_token: generateAccessToken(user),
          reflesh_token: generateRefleshToken(user),
        },
      };
      delete user.password;
      console.log(user);
      res.status(httpStatus.OK).send(user);
    })
    .catch((err) => {
      logger.error({
        message: err,
        level: "error",
      });
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
    });
};
module.exports = {
  create,
  index,
  login,
};
