const Mongoose = require("mongoose");
const logger = require("../scripts/logger/Projects.js");

const ProjectSchema = new Mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    owner: {
      type: Mongoose.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

ProjectSchema.pre("save", function (next) {
  next();
});

ProjectSchema.post("save", function (doc) {
  logger.log({
    level: "info",
    message: doc,
  });
});

module.exports = Mongoose.model("project", ProjectSchema);
