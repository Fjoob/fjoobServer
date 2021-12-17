const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
  {
    name: String,
  },
  { timestamps: true, versionKey: false  }
);

module.exports = mongoose.model("Project", ProjectSchema);
