module.exports = function (err, req, res, next) {
  // fatal
  // error
  // warn
  // info
  // debug
  // trace
  console.error(err.stack);
  res.status(500).send(err.message);
};
