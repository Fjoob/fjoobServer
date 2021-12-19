const Users = require("../models/Users");

const list = () => {
  return Users.find();
};

const insert = (data) => {
  const user = new Users(data);
  return user.save();
};
const loginUser = (loginData) => {
  return Users.findOne(loginData).exec()
};
module.exports = {
  list,
  insert,
  loginUser,
};
