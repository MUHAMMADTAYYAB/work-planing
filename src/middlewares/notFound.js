module.exports = function (req, res, next) {
  res.status(404).send("404! Unable to find the requested resource!");
};
