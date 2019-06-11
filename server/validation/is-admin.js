const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function isAdmin(data){
    let errors = {};

    data.permission = !isEmpty(data.permission) ? data.permission : '';

    if(Validator.isEmpty(data.permission)){
        errors.permission = 'You are not Administrator';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};