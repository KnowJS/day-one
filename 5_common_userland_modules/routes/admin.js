module.exports.index = function (req, res, next) {
  res.render('admin', {
    courses: []
  });
}