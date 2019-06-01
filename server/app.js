const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

var app = express();

app.use(bodyParser.json());


var Customer = require('./models/customer');
var Account = require('./models/account');
var Order = require('./models/order');

 
port = 3000;
url = 'mongodb://localhost/dodb';

// Connect to Mongoose
mongoose.connect(url, {useNewUrlParser: true});

var db = mongoose.connection;

app.get('/', function(req, res){
    res.send('Please use /api/customer');
});


// Query Customer
app.get('/api/customers', function(req, res){
    Customer.getCustomer(function(err, customers){
        if(err){
            throw err;
        }
        res.json(customers);
    });
});

app.get('/api/customer/:_id', function(req, res){
    Customer.getCustomerById(req.params._id, function(err, customer){
        if(err){
            throw err;
        }
        res.json(customer);
    });
});

app.post('/api/customer', function(req, res){
    var customer = req.body;
    Customer.addCustomer(customer, function(err, customer){
        if(err){
            throw err;
        }
        res.json(customer);
    });
});


// Query Account
app.get('/api/accounts', function(req, res){
    Account.getAccount(function(err, accounts){
        if(err){
            throw err;
        }
        res.json(accounts);
    });
});

app.get('/api/account/:_id', function(req, res){
    Account.getAccountById(req.params._id, function(err, account){
        if(err){
            throw err;
        }
        res.json(account);
    });
});

app.put('/api/account/:_id', function(req, res){
    var id = req.params._id;
    var account = req.body;
    Account.updateAccount(id, account, {}, function(err, account){
        if(err){
            throw err;
        }
        res.json(customer);
    });
});


// Query Order
app.get('/api/orders', function(req, res){
    Order.getOrder(function(err, orders){
        if(err){
            throw err;
        }
        res.json(orders);
    });
});

app.get('/api/order/:_id', function(req, res){
    Order.getOrder(req.params._id, function(err, order){
        if(err){
            throw err;
        }
        res.json(order);
    });
});

app.put('/api/order/:_id', function(req, res){
    var id = req.params._id;
    var order = req.body;
    Order.updateOrder(id, order, {}, function(err, order){
        if(err){
            throw err;
        }
        res.json(order);
    });
});



app.listen(port);

console.log(`Server started on port ${port}...`);