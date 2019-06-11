const account = require('../database/DB_account');
const q = require("q"); // khai báo promise

// ! Get Accounts === XONG
function getAccount() {
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

// ! Get Account === XONG
function getAccountByPhone(phone) {
    if(phone){
        var defer = q.defer();
        account.findOne({ userName: phone }, function (err, dulieu) {
            if (err) {
                defer.reject(err);

            } else {

                defer.resolve(dulieu);
            }
        })
        return defer.promise;
    } else {
        return false;
    }
}

// ! Get AccountID === XONG
function getAccountByID(id) {
    if(id){
        var defer = q.defer();
        account.findOne({ _id: id }, function (err, dulieu) {
            if (err) {
                defer.reject(err);

            } else {

                defer.resolve(dulieu);
            }
        })
        return defer.promise;
    } else {
        return false;
    }
}


// ! Add Account  === XONG
function addAccount(name, phone, address, password) {
    var defer = q.defer();

    account.insertMany({

        userName: phone,
        password: password,
        permission:{
            name: name,
            mobileNum: phone,
            address: address,
            motoImage: "hình 1",
            licenseImage: "Hình 2",
            avatar: "hình 3"
        },
        active: false

    }, function (err, dulieu) {
        if (err) {
            defer.reject(err);
        } else {

            defer.resolve(dulieu);
        }
    })
    return defer.promise;
}

// ! Update Account === CHƯA XONG
function updateAccount(id, name, phone, address, password) {
    var defer = q.defer();

    account.findByIdAndUpdate({
        _id: id
    }, {
        $set: {
            name: name,
            phone: phone,
            address: address,
            password: password
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


module.exports = {
    getAccount: getAccount,
    getAccountByPhone: getAccountByPhone,
    addAccount: addAccount,
    updateAccount: updateAccount,
    getAccountByID: getAccountByID
}