const express = require('express');
const route = express.Router();
const passport = require('passport');

// Load Order Model
const Customer = require('../api/customers');
const Order = require('../../models/Order');

// @route   GET api/order/test
// @desc    Tests orders route
// @access  Public
route.get('/test', (req, res) => res.json({ msg: 'Order Words'}));


// @route   GET api/order/:_id
// @desc    Get all orders of driver (by driver id)
// @access  Private
route.get('/:_id',
    passport.authenticate('jwt', {session: false}),
    (req, res) => {

        Order.find({idDriver: req.params._id})
            .then(orders => {
                res.json(orders);
            })
            .catch(err => res.status(404).json(err));
});


// @route   POST api/order/:_id/create_order
// @desc    Create new order
// @acces   Private
route.post('/:_id/create_order',
    passport.authenticate('jwt', {session: false}),
    (req, res) => {
        const errors = {};

        var mobileN = req.body.customerMobileNum;

        const newOrder = new Order({
            idDriver: req.params._id,
            customerMobileNum: mobileN,
            price: req.body.price
        });

        newOrder
            .save()
            .then(order => {
                res.json(order);
                Customer.addCustomer(mobileN);
            })
            .catch(err => console.log(err));     
});


// @route   PUT api/order/:order_id/update_order
// @desc    Update order's status
// @access  Private
route.put('/:order_id/update_order',
    passport.authenticate('jwt', {session: false}),
    (req, res) => {
        const errors = {};

        var query = {_id: req.params.order_id};
        var update = {
            status = req.body.status
        }
        var option = {};

        Order.findByIdAndUpdate(query, update, option)
            then(order => res.json(order.status));
});