const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Customer Schema 
const CustomerSchema = new Schema({
    mobilenum:{
        type: String,
        require: true
    }
});

const Customer = module.exports = mongoose.model('customers', CustomerSchema);

// // Get Customers
// module.exports.getCustomer = function(callback, limit){
//     Customer.find(callback).limit(limit);
// }

// // Get Customer
// module.exports.getCustomerById = function(customer, limit){
//     Customer.findById(id, callback);
// }

// // Add Customer
// module.exports.addCustomer = function(customer, callback){
//     Customer.create(customer, callback);
// }
