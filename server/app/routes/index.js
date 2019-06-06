var express = require('express');
var router = express.Router();

router.use("/customer", require(__dirname + "/customer"));
router.use("/account", require(__dirname + "/account"));
router.use("/order", require(__dirname + "/order"));


router.get('/', function (req, res) {
    res.send('Please use /api/customer');
});

module.exports = router;