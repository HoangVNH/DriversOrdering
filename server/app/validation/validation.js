// VALIDATION
const Joi = require('@hapi/joi');

// register validation
const register_Valida = (data) => {

    const schema = Joi.object().keys({
        Name: Joi.string().min(6).required(),
        PhoneNum: Joi.string().regex(/((09|03|07|08|05)+([0-9]{8})\b)/),
        Address: Joi.string().min(6).required(),
        Password: Joi.string().min(8).required(),
        RePassword: Joi.string().min(8).required()
    })

    return Joi.validate(data, schema);
}

// login validation
const login_Valida = (data) => {

    const schema = Joi.object().keys({
        PhoneNum: Joi.string().regex(/((09|03|07|08|05)+([0-9]{8})\b)/),
        Password: Joi.string().min(8).required()
    })

    return Joi.validate(data, schema);
}

module.exports.register_Valida = register_Valida;
module.exports.login_Valida = login_Valida;