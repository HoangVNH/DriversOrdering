var express = require('express');
var router = express.Router();

var helper = require("../helpers/helper"); // mã hóa password

const Account = require('../models/account');


// TODO: lấy dữ liệu của account
router.get('/api', function (req, res) {

    const Result = Account.getAccount();
    Result.then(function (dulieu) {

        res.send(dulieu);

    }).catch(function (err) {

        res.send(err);

    })

});

router.get('/api/account/:_id', function (req, res) {
    Account.getAccountById(req.params._id, function (err, account) {
        if (err) {
            throw err;
        }
        res.json(account);
    });
});

router.put('/api/account/:_id', function (req, res) {
    var id = req.params._id;
    var account = req.body;
    Account.updateAccount(id, account, {}, function (err, account) {
        if (err) {
            throw err;
        }
        res.json(customer);
    });
});


// TODO: đăng ký account

router.post("/api/signup", function (req, res) {
    
    var user = req.body;

    // không điền email
    if(user.Name.trim() == 0)
    {
        res.send("Bạn chưa nhập tên");
    }
    // không điền email
    if(user.Address.trim() == 0)
    {
        res.send("Bạn chưa nhập tên");
    }
    res.send(user.Name);
    // không trùng password
    if(user.Password != user.RePassword && user.password.trim().length != 0)
    {
        res.send("Mật khẩu không trùng nhau");
    }
    // mã hóa password
    var password = helper.hash_password(user.password);

    // insert vào DB
    const Result = Account.addAccount(user.Name, user.PhoneNum, user.Address, password);

    Result.then(function(dulieu){

        res.send("Thêm thành công");

    }).catch(function(err){

        res.send(err);
    })

})

module.exports = router;