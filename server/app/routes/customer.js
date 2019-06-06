var express = require('express');
var router = express.Router();

const Customer = require('../database/DB_customer');


// Query Customer
router.get('/api/customers', function (req, res) {
    Customer.getCustomer(function (err, customers) {
        if (err) {
            throw err;
        }
        res.json(customers);
    });
});

router.get('/api/customer/:_id', function (req, res) {
    Customer.getCustomerById(req.params._id, function (err, customer) {
        if (err) {
            throw err;
        }
        res.json(customer);
    });
});

router.post('/api/customer', function (req, res) {
    var customer = req.body;
    Customer.addCustomer(customer, function (err, customer) {
        if (err) {
            throw err;
        }
        res.json(customer);
    });
});

module.exports = router;