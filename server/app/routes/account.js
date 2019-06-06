var express = require('express');
var router = express.Router();

const Account = require('../database/DB_account');


// Query Account
router.get('/api/accounts', function (req, res) {
    Account.getAccount(function (err, accounts) {
        if (err) {
            throw err;
        }
        res.json(accounts);
    });
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


module.exports = router;