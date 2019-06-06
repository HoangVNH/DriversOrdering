const order = require('../database/DB_oder');
const q = require("q"); // khai báo promise

// Get Orders
function getOrder() {
    var defer = q.defer();

    order.find({}, function (err, dulieu) {
        if (err) {
            defer.reject(err);

        } else {

            defer.resolve(dulieu);
        }
    })
    return defer.promise;
}

// Get Order
function getOrderById(id) {
    var defer = q.defer();

    order.findById({
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

// Add Order
function addOrder(idDriver, customerMobileNum, status) {
    var defer = q.defer();

    order.insertMany({

        idDriver: idDriver,
        customerMobileNum: customerMobileNum,
        status: status

    }, function (err, dulieu) {
        if (err) {
            defer.reject(err);
        } else {

            defer.resolve(dulieu);
        }
    })
    return defer.promise;
}

// Update Order
function updateOrder(id, idDriver, customerMobileNum, status) {
    var defer = q.defer();

    account.findByIdAndUpdate({
        _id: id
    }, {
        $set: {

            idDriver: idDriver,
            customerMobileNum: customerMobileNum,
            status: status

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
    getOrder: getOrder,
    getOrderById: getOrderById,
    addOrder: addOrder,
    updateOrder: updateOrder
}