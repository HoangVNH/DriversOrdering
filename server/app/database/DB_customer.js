var mongoose = require('mongoose');

// Customer Schema 
var customerSchema = mongoose.Schema({
    mobileNum: {
        type: String,
        require: true
    }
}, { collection: "customer" });

module.exports = mongoose.model('customerSchema', customerSchema);