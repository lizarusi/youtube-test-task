let db = require('../db');

module.exports.all = function(cb) {
    let collection = db.get().collection('history');
    collection.find({}).toArray(function(err, data) {
        cb(err, data)
    })
};

module.exports.add = function(data, cb) {
    let collection = db.get().collection('history');
    collection.insertOne({ id: data.id, title: data.title, uniqId: data.uniqId }, function(err) {
        cb(err);
    });
};

module.exports.delete = function(uniqId, cb) {
    let collection = db.get().collection('history');
    collection.deleteOne({ uniqId }, function(err) {
        cb(err);
    });
};
