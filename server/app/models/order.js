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


function statisticOrderByAdmin(day1, day2=null){
    var defer = q.defer();
    
    const query = !day2 ? {
        $gte: new ISODate(day1),
        $lt: new ISODate(day2)
    } : new ISD(day1);

    account.find({
        created_at: query
    }, function(err, dulieu) {
        if (err) {
            defer.reject(err);
        } else {
            defer.resolve(dulieu);
        }
    })
    return defer.promise;
}

function statisticOrderByDriver(id, day1, day2=null){
    var defer = q.defer();
    
    const query = !day2 ? {
        $gte: new ISODate(day1),
        $lt: new ISODate(day2)
    } : new ISD(day1);

    account.find({
        _id: id,
        created_at: query
    }, function(err, dulieu) {
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
    updateOrder: updateOrder,
    statisticOrderByAdmin: statisticOrderByAdmin,
    statisticOrderByDriver: statisticOrderByDriver
}