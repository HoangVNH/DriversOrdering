const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//const cors = require('cors');

var app = express();

const PORT = process.env.PORT || 5000;

// cấu hình bodyParser cho form
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//app.use(cors());


// cấu hình cho views EJS
app.set("views", __dirname + "/app/views");
app.set("view engine", "ejs");


// cấu hình static folder public
app.use("/static", express.static(__dirname + "/public"));


// cấu hình để gọi cho router
const routes = require(__dirname + '/app/routes');
app.use(routes);


// cấu hình database
mongoose.connect('mongodb://localhost:27017/XeOmm', {
    useNewUrlParser: true
}).then(() => {
    console.log(`Đã kết nối DB`);
}).catch((err) => {
    console.log(`Không kết nối được tới DB`);
});
mongoose.set('useFindAndModify', false);


// Nhận request từ tất cả các nguồn
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Pass to next layer of middleware
    next();
});


// chạy server
app.listen(PORT, "0.0.0.0", function () {
    console.log("server is running on port " + PORT);
})