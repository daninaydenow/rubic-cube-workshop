const jwt = require('jsonwebtoken');
const {SECRET} = require('../constants');

exports.jwtSign = function (payload, secret) {
    let promise = new Promise((resolve, reject) => {
        jwt.sign(payload, secret, function(error, token){
            if(error) {
                reject(error);
            } else {
                resolve(token);
            }
        })
    });
    return promise;
 }

 