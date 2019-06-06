var express = require('express');
var router = express.Router();

const Order = require('../models/order');


// Query Order
router.get('/api', function (req, res) {
    Order.getOrder(function (err, orders) {
        if (err) {
            throw err;
        }
        res.json(orders);
    });
});

router.get('/api/order/:_id', function (req, res) {
    Order.getOrder(req.params._id, function (err, order) {
        if (err) {
            throw err;
        }
        res.json(order);
    });
});

router.put('/api/order/:_id', function (req, res) {
    var id = req.params._id;
    var order = req.body;
    Order.updateOrder(id, order, {}, function (err, order) {
        if (err) {
            throw err;
        }
        res.json(order);
    });
});


module.exports = router;