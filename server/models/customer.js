var mongoose = require('mongoose');

// Customer Schema 
var customerSchema = mongoose.Schema({
    mobileNum:{
        type: String,
        require: true
    }
});

var Customer = module.exports = mongoose.model('Customer', customerSchema);

// Get Customers
module.exports.getCustomer = function(callback, limit){
    Customer.find(callback).limit(limit);
}

// Get Customer
module.exports.getCustomerById = function(customer, limit){
    Customer.findById(id, callback);
}

// Add Customer
module.exports.addCustomer = function(customer, callback){
    Customer.create(customer, callback);
}
