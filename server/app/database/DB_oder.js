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
    price: {
        type: String,
        require: true
    },
    status: {
        type: Boolean,
        default: false
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
}, { collection: "order" });

module.exports = mongoose.model('orderSchema', orderSchema);