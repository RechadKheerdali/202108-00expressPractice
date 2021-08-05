/**     INCOMPLETE   (iK I think I completed it but come back after you are happy)
 * Joi  (validation error handling)
 */
const iKjoi = require('joi');

const iKmockData = {
    iKname: 'rechad',
    iKemail: 'rechadkheerdali@gmail.com',
    iKpassword: '123',
};

const iKschema = iKjoi.object().keys({
    iKname: iKjoi.string().trim().required(),
    iKemail: iKjoi.string().trim().email().required(),
    iKpassword: iKjoi.string().min(5).max(10).required()
})

// console.log(
//     iKschema.validate( iKmockData )
// )
async function ik() {
    try {
        await iKschema.validateAsync( iKmockData );
    }
    catch (err) { 
        console.error(err.details[0].message)
    }
}
ik()

/**
 * 
 * 
 */