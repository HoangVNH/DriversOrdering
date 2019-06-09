var express = require('express');
var router = express.Router();

router.use("/customer", require(__dirname + "/customer")); // TODO: localhost:5000/customer/....
router.use("/account", require(__dirname + "/account")); // TODO: localhost:5000/account/....
router.use("/order", require(__dirname + "/order")); // TODO: localhost:5000/order/....


router.get('/', function (req, res) { // TODO: localhost:5000/
    res.sen('HELLO');
});

module.exports = router;