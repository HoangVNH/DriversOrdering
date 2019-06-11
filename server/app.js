const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');

const account = require('./routes/api/account');
const orders = require('./routes/api/orders');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose.connect(db, {useNewUrlParser: true})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));


// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

// Use Routes
app.use('/api/account', account);
// app.use('/api/orders', orders);


// Server static assets if in production
// if (process.env.NODE_ENV === 'production') {
//         // Set static folder
//         app.use(express.static('client/build'));
    
//         app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//         });
//     }
    
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));















// var Customer = require('./models/Customer');
// var Account = require('./models/Account');
// var Order = require('./models/Order');
// //e6842ae9-e815-4d48-9c72-0b23583674cf

// port = 3000;
// // url = 'mongodb://localhost/dodb';
// uri = 'mongodb+srv://hung1660227:hung1660227@driver-ordering-5zhnx.mongodb.net/driver-ordering?retryWrites=true&w=majority'


// // Connect to Mongoose
// mongoose.connect(uri, {useNewUrlParser: true}).catch(
//     (error) => console.log(JSON.stringify(error))
// );

// var db = mongoose.connection;

// app.get('/', function(req, res){
//     res.send('Please use /api/customer');
// });


// // Query Customer
// app.get('/api/customers', function(req, res){
//     Customer.getCustomer(function(err, customers){
//         if(err){
//             throw err;
//         }
//         res.json(customers);
//     });
// });

// app.get('/api/customer/:_id', function(req, res){
//     Customer.getCustomerById(req.params._id, function(err, customer){
//         if(err){
//             throw err;
//         }
//         res.json(customer);
//     });
// });

// app.post('/api/customer', function(req, res){
//     var customer = req.body;
//     Customer.addCustomer(customer, function(err, customer){
//         if(err){
//             throw err;
//         }
//         res.json(customer);
//     });
// });


// // Query Account
// app.get('/api/accounts', function(req, res){
//     Account.getAccount(function(err, accounts){
//         if(err){
//             throw err;
//         }
//         console.log(accounts)
//         // res.json(accounts);
//     });
// });

// app.get('/api/account/:_id', function(req, res){
//     Account.getAccountById(req.params._id, function(err, account){
//         if(err){
//             throw err;
//         }
//         res.json(account);
//     });
// });

// app.put('/api/account/:_id', function(req, res){
//     var id = req.params._id;
//     var account = req.body;
//     Account.updateAccount(id, account, {}, function(err, account){
//         if(err){
//             throw err;
//         }
//         res.json(customer);
//     });
// });


// // Query Order
// app.get('/api/orders', function(req, res){
//     Order.getOrder(function(err, orders){
//         if(err){
//             throw err;
//         }
//         res.json(orders);
//     });
// });

// app.get('/api/order/:_id', function(req, res){
//     Order.getOrder(req.params._id, function(err, order){
//         if(err){
//             throw err;
//         }
//         res.json(order);
//     });
// });

// app.put('/api/order/:_id', function(req, res){
//     var id = req.params._id;
//     var order = req.body;
//     Order.updateOrder(id, order, {}, function(err, order){
//         if(err){
//             throw err;
//         }
//         res.json(order);
//     });
// });



// app.listen(port);

// console.log(`Server started on port ${port}...`);