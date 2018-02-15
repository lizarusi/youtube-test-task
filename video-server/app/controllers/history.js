var express = require('express')
    , router = express.Router();

let historyModel = require('../models/history');

router.post('/history/add', (req, res) => {
    historyModel.add(req.body, (err) => {
        if (err) {
          res.send(err.toString(), 500);
        } else {
            res.send('ADDED');
        }
    });
});

router.delete('/history/delete', (req, res) => {
    historyModel.delete(req.param('id'), (err) => {
        if (err) {
            res.send(err.toString(), 500);
        } else {
            res.send('DELETED');
        }
    });
});

router.get('/history', (req, res) => {
    historyModel.all((err, data) => {
        if (err) {
            res.send(err.toString(), 500);
        } else {
            res.send(data);
        }
    });
});

module.exports = router;