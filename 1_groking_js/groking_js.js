/*
 * Let's pretend we have a function which performs IO asynchronously
 */

function save (item, cb) {
  // let's pretend we're adding two numbers on 
	// a remote server somewhere, and it takes a 
	// second
	setTimeout(function () {
		cb(null, { success: true });
	}, 1000);
}

/*
 * How can do we use this function to add two numbers?
 */
save(2, function (err, result) {
	console.log('saved one!', result)
});

/*
 * What if we want to add a bunch of numbers?
 */
save(2, function (err, result) {
	if (err) throw err;
	console.log('saved many, one at a time!')
	console.log(result);
	save(3, function (err, result) {
		if (err) throw err;
		console.log(result);
		save(4, function (err, result) {
			if (err) throw err;
			console.log(result);
		});
	});
});

/*
 * Well, that's ugly. And, it only seems
 * to save each item once the last is done
 * saving. Can we make it better?
 */

var completed = 0, results = [];
function checkDone (err, result) {
	if (err) throw err;
	completed++;
	results.push(result)
	if (completed === 3) {
		console.log('saved using checkDone pattern: %j', results);
	}
}

save(2, checkDone);
save(3, checkDone);
save(4, checkDone);

/*
 * That definitely made the last part look cleaner. 
 * And they're all happening simultaneously now.
 */

var presults = [];
var input = [2, 3, 4];

function parallelize (item, cb) {
	save(item, cb);
}

input.forEach(function (item) {
	parallelize(item, function checkDone (err, result) {
		if (err) throw err;
		presults.push(result)
		if (presults.length === input.length) {
			console.log('saved using checkDone pattern 2: %j', presults);
		}
	});
});

/* 
 * Cool. A little cleaner, still.
 * What other ways can we do this?
 */

var events = require('events');
var util = require('util');

function Saver () {
	events.EventEmitter.call(this);
}

util.inherits(Saver, events.EventEmitter);

Saver.prototype.save = function (item) {
	var self = this;
	setTimeout(function () {
		self.emit('saved', { success: true });
	}, 1000);	
};

var saver = new Saver();

saver.on('saved', function (result) {
	console.log('saved using events: %j', result);
});

/*
 * That's neat, so you can emit an event instead of
 * just relying on callbacks.
 * 
 * Are there any libraries that can help us make this
 * more succinct?
 */

var async = require('async');

async.map([2, 3, 4], save, function (err, results) {
	console.log('saved with async: %j', results)
})
