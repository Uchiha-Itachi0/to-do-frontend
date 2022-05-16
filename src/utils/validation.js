const validator = require('validator');

module.exports = {
    EMAIL: (value) => {
        return validator.isEmail(value);
    },
    PASSWORD_LENGTH: (value) => {
        return validator.isLength(value, {min: 8});
    },
    PASSWORD_MATCH: (password, confirmPassword) => {
        return validator.equals(password, confirmPassword);
    },
    MIN_LENGTH : (value) => {
        return validator.isLength(value, {min: 1});
    }
}
