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
});

var Account = module.exports = mongoose.model('Account', accountSchema);

// Get Accounts
module.exports.getAccount = function(callback, limit){
    Account.find(callback).limit(limit);
}

// Get Account
module.exports.getAccountById = function(account, limit){
    Account.findById(id, callback);
}

// Add Account
module.exports.addAccount = function(account, callback){
    Account.create(account, callback);
}

// Update Account
module.exports.updateAccount = function(id, account, option, callback){
    var query = {_id: id};
    var update = {
        password = account.password,
        permission = account.permission,
        active = account.active
    }
    Account.findOneAndUpdate(query, update, option, callback);
}