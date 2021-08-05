/**
 * jsonwebtoken     (package)
 */
/**
 * iK? mostly ideal to create a quick jwt token (bearer token) and verifying but you will have to do most of the other work yourself, such as validating, pulling and matching data, etc...
 */

const iKexpress = require('express');
const iKmorgan = require('morgan')

const iKjwt = require('jsonwebtoken');

const iKapp = iKexpress();
iKapp.use(iKmorgan('dev'))

iKapp.get('/api', (req, res) => {
    res.json({ message: 'iK welcome to the API'})
});

iKapp.post('/api/login', (req, res) => {
    //mock user logging details /*1+*/
    const iKuser = {
        id: 1,
        username: 'rechad',
        email: 'richardkheerdali@gmail.com'
    }

    //create token for client when user logs in
    iKjwt.sign({iKuser}, 'iKmySecretKey', { expiresIn: '30s' }, (iKerr, iKtoken) => {/*2+*/
        //send token to client
        res.json({ iKtoken }) /*3*/
    })
}) /*END iKapp.post('/api/login' */

//The client user wants to make a post, and also sends a header authorization token to verify to server
iKapp.post('/api/posts', iKverifyTokenMiddleware, (req, res) => {
    iKjwt.verify(req.token, 'iKmySecretKey', (iKerr, iKauthData) => {  /*4+*/
        if (iKerr) res.send('iK token denied')
        else res.json({ 
            message: 'iK post created successfully',
            iKauthData 
        })
    })
}) /*END iKapp.post('/api/posts', */

//middleware to verify client user token
function iKverifyTokenMiddleware (req, res, next) {
    //Get request auth header value
    const iKbearerHeader = req.headers['authorization']  /*5+*/
    //Check if bearer is undefined meaning no token or false token was provided
    if(typeof iKbearerHeader !== 'undefined') {
        //split at space
        const iKbearer = iKbearerHeader.split(' ')
        //Get token from array
        const iKbearerToken = iKbearer[1]
        //Assign the request token up for the next middleware for verification
        req.token = iKbearerToken
        //Next middleware
        next()
    }     
    else {
        //returns 'Forbidden' status
        res.sendStatus(403)
    }    
} /*END iKverifyTokenMiddleware */

const iKport = process.env.PORT || 3000;
iKapp.listen(iKport, () => console.log('iK server on port 3000'));

/**
 * 1+ We do not do this, as the client user would send their logging details to the server and then we would see if they exist in our database. But for this demo we created a pretend user logging details to demostrate the use of jsonwebtoken
 * 2+ iK? 'iKmySecretKey' can be anything, I would think best to use UUID or create some sort of public and private key
 * 3+ client side should save the token within localStorage
 * 4+ iKauthData would contain the iKuser payload data, iat (timestamp that jsonwebtoken created) and etc
 * 5+ Remember that the format of the bearer token will be: Authorization: Bearer <access_token>
 *      + you should also not commit your secret key and instead store it in a file for .gitignore
 */