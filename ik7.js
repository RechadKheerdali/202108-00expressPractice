/**
 * cookie-parser
 */

const iKexpress = require('express');
const iKcookieParser = require('cookie-parser')

const iKapp = iKexpress();
iKapp.use( iKcookieParser() )

//You can think of this as mock database
const iKuser = {
    iKname: 'rechad',
    Age: 75
}

//No cookie set yet
iKapp.get('/', (req, res) => {
    res.send('iK Rechad Kheerdali');
});

//cookie is created. You can think of this as signing/logging in
iKapp.get('/iksetuser', (req, res) => {
    res.cookie( 'iKuserData', iKuser )
    res.send('iKuserData add to cookie');
});

//Accessing the cookie data. Possible cookie authentication could be done here
iKapp.get('/ikgetuser', (req, res) => {
    res.send(req.cookies.iKuserData);
});

//Clear cookie
iKapp.get('/ikclearcookie', (req, res) => {
    res.clearCookie('iKuserData')
    res.send('iK cleared cookie')
});



iKapp.listen(3000, () => console.log('iK server on port 3000'));

/**
 * iK? from this experiment, I notice the cookie was stored in the browser cookier storage and it you can see the data, but with express-session the data looked hashed. Perhaps I would need to do extra settings if I was it to be encrpted
 * 
 */