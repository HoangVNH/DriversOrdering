const customer = require('../database/DB_customer');
const q = require("q"); // khai báo promise

// Get Customers
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

// Get Customer
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

// Add Customer
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