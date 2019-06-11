const mongoose = require('mongoose');
const Schema = mongoose.Schema
// Customer Schema 
const OrderSchema = new Schema({
    idDriver: {
        type: Schema.Types.ObjectId,
        require: true
    },
    customerMobileNum: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true
    },
    status: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Order = module.exports = mongoose.model('orders', OrderSchema);

// // Get Orders
// module.exports.getOrder = function(callback, limit){
//     Order.find(callback).limit(limit);
// }

// // Get Order
// module.exports.getOrderById = function(order, limit){
//     Order.findById(id, callback);
// }

// // Add Order
// module.exports.addOrder = function(order, callback){
//     Order.create(order, callback);
// }

// // Update Order
// module.exports.updateOrder = function(id, order, option, callback){
//     var query = {_id: id};
//     var update = {
//         status: order.status
//     }
//     Order.findOneAndUpdate(query, update, option, callback);
// }