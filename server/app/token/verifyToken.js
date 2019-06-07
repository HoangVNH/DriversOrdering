const jwt = require('jsonwebtoken');

module.exports = function (req, res, next){
    const token = req.header('auth-token');

    if(!token) return res.status(401).send("Từ chối truy cập");

    try{ 
        const verifyed = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verifyed;
        next();
    }catch{
        res.status(400).send("Token không hợp lệ");
    }
}