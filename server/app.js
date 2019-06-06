const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

var app = express();

const PORT = process.env.PORT || 3000;

// cấu hình bodyParser cho form
app.use(bodyParser.json());
app.use(express.urlencoded({
    extended: false
}));


// cấu hình cho views EJS
app.set("views", __dirname + "/app/views");
app.set("view engine", "ejs");


// cấu hình static folder public
app.use("/static", express.static(__dirname + "/public"));


// cấu hình để gọi cho router
var routes = require(__dirname + '/app/routes');
app.use(routes);


// cấu hình database
mongoose.connect('mongodb://localhost:27017/mapDB', {
    useNewUrlParser: true
}).then(() => {
    console.log(`Đã kết nối DB ${config.get("mongoDB.database")}`);
}).catch((err) => {
    console.log(`Không kết nối được tới DB`);
});
mongoose.set('useFindAndModify', false);


// chạy server
app.listen(PORT, function () {
    console.log("server is running on port " + PORT);
})