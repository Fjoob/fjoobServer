const UserModel = require("../models/Users");
const BaseServise = require("./BaseService");
const ProjectService = require("../services/Project");
class Users extends BaseServise {
   projectService = new ProjectService()
  constructor() {
    super(UserModel);
  }
  loginUser(loginData) {
    return UserModel.findOne(loginData).exec();
  }
  projectList(query) {
   return this.projectService.list(query)
  }
}

module.exports = Users;
