const express = require('express');
const router = express.Router();
const multer = require('multer');
const jwt = require('jsonwebtoken');
const helper = require("../helpers/helper"); // mã hóa password
const { register_Valida, login_Valida } = require('../validation/validation'); // vadidation

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

// TODO: đăng nhập account
router.post("/api/login", function (req, res) {

    var user = req.body;

    // ! Kiểm tra phone, password
    const { error } = login_Valida(user);
    if(error) return res.send(error.details[0].message);

    // ! Kiểm tra phone đã đăng kí chưa
    const PhoneExist = Account.getAccountByPhone(user.PhoneNum);
    PhoneExist.then(function(data){
        if(data){
            var params = data;
            // ! Kiểm tra password và giải mã password
            var status = helper.compare_password(user.Password, params.password);
            if(!status){
    
                return res.send("Nhập sai mật khẩu");
            }else{
                console.log(params.active);
                if(params.active === false){

                    return res.send("Tài khoản của bạn chưa được mở");
                } else {

                    // ! tạo và gán mã Token
                    const token = jwt.sign({ _id: params._id, user: params.userName }, process.env.TOKEN_SECRET);
                    res.header('token', token).send("Đăng Nhập Thành Công");
                }
            
            }

        } else {
            return res.send("Số điện thoại chưa tồn tại");
        }
    })
 
});


// TODO: đăng ký account
router.post("/api/signup", function (req, res) {
    
    var user = req.body;

    // ! Kiểm tra name, phone, address, password, repassword
    const { error } = register_Valida(user);
    if(error) return res.send(error.details[0].message);

    // ! không trùng password
    if(user.Password != user.RePassword) return res.send("Mật khẩu không trùng nhau");
    
    // ! Kiểm tra Phone đã tồn tại chưa
    const PhoneExist = Account.getAccountByPhone(user.PhoneNum);
    PhoneExist.then(function(data){
        if(data){

            return res.send("Số điện thoại đã tồn tại");

        } else {
            // ! mã hóa password
            const password = helper.hash_password(user.Password);

            // ! insert vào DB
            const Result = Account.addAccount(user.Name, user.PhoneNum, user.Address, password);

            Result.then(function(dulieu){

                 // ! Đăng ký thành công
                res.send("");

            }).catch(function(err){

                res.send(err);
            })
        }
    })

})

// TODO: Lấy Dữ Liệu 1 account
router.post('/api/getaccount', function(req, res){

    var user = req.body;

    const getIdUser = Account.getAccountByID(user.idUser);
    getIdUser.then(function(data){
        if(data){

            res.send(data);

        } else {
            
        }
    })
})

// TODO: Cập Nhật Dữ Liệu 1 account
router.post('/api/update', function(req, res){

    var user = req.body;
    
    const UserID = Account.updateAccount(user.id._id, user.Name, user.PhoneNum, user.Address);
    UserID.then(function(data){
        if(data){

            res.send(data);

        } else {
            
        }
    })
})

// khai báo đường dẫn lưu trữ
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../../static/uploads');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname );
  }
})

// check files up lên
function checkFileUpload (req, file, cb) {

  if(!file.originalname.match(/\.(jpg|png|gif|jpeg)$/))
  {
    cb(new Error('Bạn chỉ được upload file ảnh'));
  }
  else
  {
    cb(null, true); // OK
  }
}

var upload = multer({ storage: storage, fileFilter: checkFileUpload })


router.post('/api/upload', upload.single('avatar') ,function(req, res, next) {
  res.send("Đã nhập được dữ liệu");
});



// TODO: Cập Nhật Trạng Thái 1 account
router.post('/api/getaccount/drive', function (req, res) {
    var id = req.body.id;
    var status = req.body.status;

    if(status == 'true'){
        status = 'false';

    } else {
        status = 'true';

    }
    
    const IDstatus = Account.updateAccountStatus(id, status);
    IDstatus.then(function(data){
        if(data){

            res.send(data);

        } else {
            
        }
    })
});



module.exports = router;