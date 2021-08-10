/**
 * encoding in base64 before encoding to jwt.
 * It all works perfectly
 */


 const iKbase64url = require('base64url');
 const iKjwt = require('jsonwebtoken');

const iKuserId = '1234';

const iKencode = iKbase64url(iKuserId)
console.log(333, iKencode)


const iKtoken = iKjwt.sign({iKencode}, 'iKmySecretKey', { expiresIn: '300s' })

console.log(111, iKtoken)

const iKverified = iKjwt.verify(iKtoken, 'iKmySecretKey')

console.log(222, iKverified);


const iKdecode = iKbase64url.decode(iKverified.iKencode)
 console.log(444, iKdecode)





