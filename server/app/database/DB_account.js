var mongoose = require('mongoose');

// Account Schema 
var accountSchema = mongoose.Schema({
    userName: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    permission: {
        name: String,
        mobileNum: String,
        address: String,
        motoImage: String,
        licenseImage: String,
        avatar: String
    },
    active: {
        type: Boolean,
        default: false
    }
}, { collection: "account" });

module.exports = mongoose.model('accountSchema', accountSchema);