/**
 * Joi  (validation error handling)
 */

const iKjoi = require('joi');

const iKmockDataOfArrayObject = [
    {
        iKname: 'rechad',
        iKemail: 'rechadkheerdali@gmail.com',
        iKpassword: 'richard',
    }
];

//Your validation schema condition required to pass
const iKschema = iKjoi.array().items(
    iKjoi.object({
        iKname: iKjoi.string().trim().required(),
        iKemail: iKjoi.string().trim().email().required(),
        iKpassword: iKjoi.string().min(5).max(10).required()
    })
)

//Use .validate() to validate any data you want to match the schema
const iKvalidate = iKschema.validate( iKmockDataOfArrayObject );

console.log(iKvalidate)
    /*OP: If successful then it will return {value: … } with the mock data inside */
    /*OP: If data fails validation, then it will return {value: … , error: …} . The error property will have details why it failed */


/**
 * 
 * 
 */
