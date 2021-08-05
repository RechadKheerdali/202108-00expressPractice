/**
 * Bcrypt       (IK COPY THIS ONTO THE WORD DOC)
 */


const bcrypt = require('bcrypt');
const saltRounds = 10; /*1+*/
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

//Generate the salt
bcrypt.genSalt(saltRounds, function(err, salt) {
    //Hash the password
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
        // Store hash in your password DB.
        console.log(hash)
    });
});


/*Verify password*/
// Load hash from your password DB and compare if the password is matching
bcrypt.compare(myPlaintextPassword, hash, function(err, result) { /*2+*/
    // result == true
});

bcrypt.compare(someOtherPlaintextPassword, hash, function(err, result) {
    // result == false
});


/**
 * 1+ 10 is the default value and usually this is what you will be using most of the time
 * 2+ result will return boolean value, and if password matching with hash password than it will be true otherwise false
 * iK Most of bcrypt methods are generally asynchronous callbacks, so you will need to set up appropriately in the app project
 */