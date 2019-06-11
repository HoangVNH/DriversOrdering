const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Account Schema 
const AccountSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    permission: [
        {
            name: String,
            mobileNum: String,
            address: String,
            motoImage: String,
            licenseImage: String,
            avatar: String
        }
    ],
    active: {
        type: Boolean,
        default: false
    }
});

const Account = module.exports = mongoose.model('accounts', AccountSchema);

// // Get Accounts
// module.exports.getAccount = function(){
//     Account.find()
//     .exec()
//     .then(result => console.log(result))
//     .catch(error => console.log(JSON.stringify(error))
//     );
// }

// // Get Account
// module.exports.getAccountById = function(id, limit){
//     Account.findById(id, callback)
//     .exec()
//     .then(result => console.log(result))
//     .catch(error => console.log(error)
//     );
// }

// // Add Account
// module.exports.addAccount = function(account, callback){
//     Account.create(account, callback);
// }

// // Update Account
// module.exports.updateAccount = function(id, account, option, callback){
//     var query = {_id: id};
//     var update = {
//         password: account.password,
//         permission: account.permission,
//         active: account.active,
//     }
//     Account.findOneAndUpdate(query, update, option, callback);
// }