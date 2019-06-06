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

module.exports = mongoose.model('orderSchema', orderSchema);