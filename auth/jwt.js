const jwt = require("jsonwebtoken");

const { jwtSecret } = require("../config/secrets");

function toJWT(data) {
  return jwt.sign(data, jwtSecret);
}

function toData(token) {
  return jwt.verify(token, jwtSecret);
}

module.exports = { toJWT, toData };
