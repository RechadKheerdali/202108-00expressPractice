/**
 *      bcrypt      (hashing password)
 */
const iKbrypt = require('bcrypt')

const iKbcryptFunction = async() => {
    //The plain text password
    const iKsaltRounds = 10;
    const iKoriginalPassword = 'iKuserPassword'
    const iKpassword = 'iKuserPassword'

    try {
        //Generate the salt separately
        // const iKsalt = await iKbrypt.genSalt( iKsaltRounds )
        // console.log(iKsalt)

        //Hash the password
        const iKhashPassword = await iKbrypt.hash( iKpassword, iKsaltRounds )

        //store the hash password in your DB
        console.log(iKhashPassword)

        //Load hash password from your DB and compare to the iKoriginalPassword from the user client side
        const iKisMatchingPassword = await iKbrypt.compare(iKoriginalPassword, iKhashPassword)

        //Confirm if password is matching to the user client side
        console.log( iKisMatchingPassword )

    } catch (iKerr) {
        console.log(iKerr)
    }
}

iKbcryptFunction()

// console.log(iKbrypt)


/**
 * 
 */




