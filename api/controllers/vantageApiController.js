'use strict';


var mongoose = require('mongoose'),
    read = mongoose.model('read');


exports.list_all_reads = function(req, res) {
  read.find({}, function(err, readData) {
    if (err)
      res.send(err);
    res.json(readData);
  });
};


exports.create_a_read = function(req, res) {
  var new_read = new read(req.body);
  new_read.save(function(err, readData) {
    if (err)
      res.send(err);
    res.json(readData);
  });
};


exports.get_a_read = function(req, res) {
  read.find({readDate: req.params.readHour}, function(err, readData) {
    if (err)
      res.send(err);
    res.json(readData);
  });
};


exports.update_a_read = function(req, res) {
  read.findOneAndUpdate({readDate: req.params.readHour}, req.body, {new: true}, function(err, readData) {
    if (err)
      res.send(err);
    res.json(readData);
  });
};


exports.delete_a_read = function(req, res) {
  read.remove({
    readDate: req.params.readHour
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Read successfully deleted' });
  });
};


