const customer = require('../database/DB_customer');
const q = require("q"); // khai báo promise

// ! Get Customers === CHƯA XONG
function getCustomer() {
    var defer = q.defer();

    customer.find({}, function (err, dulieu) {
        if (err) {
            defer.reject(err);

        } else {

            defer.resolve(dulieu);
        }
    })
    return defer.promise;
}

// ! Get Customer === CHƯA XONG
function getCustomerById(id) {
    var defer = q.defer();

    customer.findById({
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

// ! Add Customer === CHƯA XONG
function addCustomer(phoneNum) {
    var defer = q.defer();

    customer.insertMany({

        mobileNum: phoneNum

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
    getCustomer: getCustomer,
    getCustomerById: getCustomerById,
    addCustomer: addCustomer
}