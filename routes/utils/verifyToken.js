const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).send("Access Denied");

  try {
    const verified = jwt.verify(token, "logger_secret");
    res.user = verified;
    next();
  } catch (err) {
    res.status(400).send("Invalid Token");
  }
};
