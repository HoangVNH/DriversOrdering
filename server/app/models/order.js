const order = require('../database/DB_oder');
const q = require("q"); // khai báo promise

// ! Get Orders === CHƯA XONG
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

// ! Get Order === CHƯA XONG
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

// ! Add Order === CHƯA XONG
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

// ! Update Order === CHƯA XONG
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