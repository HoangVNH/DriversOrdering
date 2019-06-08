const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const fileUpload = require('express-fileupload');
const cors = require('cors');

var app = express();

const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(fileUpload());


// cấu hình bodyParser cho form
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));


// cấu hình cho views EJS
app.set("views", __dirname + "/app/views");
app.set("view engine", "ejs");


// cấu hình static folder public
app.use("/static", express.static(__dirname + "/public"));


// cấu hình để gọi cho router
const routes = require(__dirname + '/app/routes');
app.use(routes);


// cấu hình database
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }).then(() => {
    console.log(`Đã kết nối DB`);
}).catch((err) => {
    console.log(`Không kết nối được tới DB`);
});
mongoose.set('useFindAndModify', false);

// cấu hình cho client nhận được
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
}
app.use(cors(corsOptions));

// chạy server
app.listen(PORT, "0.0.0.0", function () {
    console.log("server is running on port " + PORT);
})