const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 'iKpassword';
const someOtherPlaintextPassword = 'not_bacon';

let iKhash;

bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
        // Store hash in your password DB.
        iKhash = hash
        console.log(hash)
    });
});

const iK = async () => {
// Load hash from your password DB.
await bcrypt.compare(myPlaintextPassword, iKhash, function(err, result) {
    // result == true
    console.log(1, result)
});
await bcrypt.compare(someOtherPlaintextPassword, iKhash, function(err, result) {
    // result == false
    console.log(2, result)
})

}

setTimeout(() => iK(), 500)