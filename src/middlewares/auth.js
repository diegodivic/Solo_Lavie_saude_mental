const expressJWT = require('express-jwt');
const secret = require('../configs/secret');




module.exports = expresJWT({
    secret: secret.key,
    algorithms: ["HS256"],

});