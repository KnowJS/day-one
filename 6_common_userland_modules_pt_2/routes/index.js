exports.index = function (req, res) {
  res.render('index', { title: 'Express' });
};

exports.upload = function (req, res) {
  res.render('upload', { title: 'Express' });
}

var gm = require('gm')
	, fs = require('fs')
  , imageMagick = gm.subClass({ imageMagick: true });
var async = require('async');


exports.resize = function (req, res, next) {
	function magick (size, cb) {
		// the uploaded file can be found as `req.files.image` and the
		var one = fs.createWriteStream(__dirname + '/../public/images/' + size + '.png');
		one.on('error', cb);
		one.on('finish', cb);

		imageMagick(req.files.image.path)
			.resize(size, size)
			.stream('png')
			.pipe(one);
	}
  // title field as `req.body.title`
  console.log('resizing %s', req.files.image.name);
	async.map([150, 250, 500], magick, function (err) {
		res.render('images');
	})
};
