const crypto = require("crypto-js");
const JWT = require("jsonwebtoken");
const passwordToHash = (password) => {
  return crypto
    .HmacSHA256(
      password,
      crypto.HmacSHA1(password, process.env.PASSWORD_HASH).toString()
    )
    .toString();
};

const generateAccessToken = (user) => {
  return JWT.sign(user.toString(), process.env.ACCESS_TOKEN_SECRET_KEY);
};

const generateRefleshToken = (user) => {
  return JWT.sign(user.toString(), process.env.REFLESH_TOKEN_SECRET_KEY);
};

module.exports = { passwordToHash, generateAccessToken, generateRefleshToken }; 
