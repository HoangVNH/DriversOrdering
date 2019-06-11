const express = require('express');
const router = express.Router();

// Loead Customer Model
const Customer = require('../../models/Customer');

// @route   GET api/customer/test
// @desc    Tests customers route
// @access  Public
router.get('/test', (res, req) => res.json({msg: 'Customer Works'}));


// @route   GET api/customer/all
// @desc    Get all customer
// @access  Public
router.get('/all', (res, res) =>{
    const errors = {};

    Customer.find()
        .then(customer => {
            res.json(customer);
        })
        .catch(err => res.status(404).json({customer: 'There are no customers'}));
});


// Create new customer when mobile number doesn't exist in Customer collection
module.exports.addCustomer = function(mobile) {
    Customer.findOne({mobileNum: mobile})
        .then(customer => {

            // If this customer not exist, then create a new one, Otherwise just pass
            if(!customer){
                const newCustomer = new Customer({mobileNum: mobile});

                newCustomer.save().then(customer => res.json(customer))
                    .catch(err => console.log(err));
            }
        });
};