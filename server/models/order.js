var mongoose = require('mongoose');

// Customer Schema 
var orderSchema = mongoose.Schema({
    idDriver: {
        type: String,
        require: true
    },
    customerMobileNum: {
        type: String,
        require: true
    },
    status: {
        type: Boolean,
        default: false
    }
});

var Order = module.exports = mongoose.model('Order', orderSchema);

// Get Orders
module.exports.getOrder = function(callback, limit){
    Order.find(callback).limit(limit);
}

// Get Order
module.exports.getOrderById = function(order, limit){
    Order.findById(id, callback);
}

// Add Order
module.exports.addOrder = function(order, callback){
    Order.create(order, callback);
}

// Update Order
module.exports.updateOrder = function(id, order, option, callback){
    var query = {_id: id};
    var update = {
        status: order.status
    }
    Order.findOneAndUpdate(query, update, option, callback);
}