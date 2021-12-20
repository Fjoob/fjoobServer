const ProjectModel = require("../models/Project");
const BaseServise = require("./BaseService");
class Project extends BaseServise {
  constructor() {
    super(ProjectModel);
  }
  list(query) {
    return ProjectModel.find(query || {}).populate({
      path: "owner",
      select: "full_name email",
    });
  }
}

module.exports = Project;
