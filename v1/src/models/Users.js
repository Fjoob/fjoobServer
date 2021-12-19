const Mongoose = require("mongoose");
const { passwordToHash } = require("../scripts/utils/helpers");

const UserSchema = new Mongoose.Schema(
  {
    full_name: String,
    password: String,
    email: String,
    profile_image: String,
  },
  { timestamps: true, versionKey: false }
);



UserSchema.pre("save", async function (next) {
  this.password = passwordToHash(this.password);

  next();
});

module.exports = Mongoose.model("user", UserSchema);
