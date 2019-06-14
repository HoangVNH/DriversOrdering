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

router.get('api/order/statistic', function(req, res) {
    var day1 = req.body.day1;
    var day2 = !req.body.day2 ? req.body.day2 : null;

    Order.statisticOrderByAdmin(day1, day2, function(err, order) {
        if (err) {
            throw err;
        }
        res.json(order);
    })
})

router.get('api/order/statistic/:_id', function(req, res) {
    
    var id = req.params._id;
    var day1 = req.body.day1;
    var day2 = !req.body.day2 ? req.body.day2 : null;

    Order.statisticOrderByDriver(id, day1, day2, function(err, order) {
        if (err) {
            throw err;
        }
        res.json(order);
    })
})

module.exports = router;