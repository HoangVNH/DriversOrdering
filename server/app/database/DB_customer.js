var mongoose = require('mongoose');

// Customer Schema 
var customerSchema = mongoose.Schema({
    mobileNum: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('customerSchema', customerSchema);