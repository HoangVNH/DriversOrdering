const account = require('../database/DB_account');
const q = require("q"); // khai báo promise

// Get Accounts
function getAccount(callback, limit) {
    var defer = q.defer();

    account.find({}, function (err, dulieu) {
        if (err) {
            defer.reject(err);

        } else {

            defer.resolve(dulieu);
        }
    })
    return defer.promise;
}

// Get Account
function getAccountById(id) {
    var defer = q.defer();

    account.findById({
        _id: id
    }, function (err, dulieu) {
        if (err) {
            defer.reject(err);

        } else {

            defer.resolve(dulieu);
        }
    })
    return defer.promise;
}

// Add Account
function addAccount(title, content, author, created_at, updated_at) {
    var defer = q.defer();

    account.insertMany({

        title: title,
        content: content,
        author: author,
        created_at: created_at,
        updated_at: updated_at

    }, function (err, dulieu) {
        if (err) {
            defer.reject(err);
        } else {

            defer.resolve(dulieu);
        }
    })
    return defer.promise;
}

// Update Account
function updateAccount(id, title, content, author, updated_at) {
    var defer = q.defer();

    account.findByIdAndUpdate({
        _id: id
    }, {
        $set: {
            title: title,
            content: content,
            author: author,
            updated_at: updated_at
        }
    }, function (err, dulieu) {
        if (err) {
            defer.reject(err);

        } else {

            defer.resolve(dulieu);
        }
    })
    return defer.promise;
}

// ! ===============================================
// Add Account
function addAccount(account, callback) {
    Account.create(account, callback);
}

// Update Account
function updateAccount(id, account, option, callback) {
    var query = {
        _id: id
    };
    var update = {
        password = account.password,
        permission = account.permission,
        active = account.active
    }
    Account.findOneAndUpdate(query, update, option, callback);
}
// ! ===============================================

module.exports = {
    getAccount: getAccount,
    getAccountById: getAccountById,
    addAccount: addAccount,
    updateAccount: updateAccount
}