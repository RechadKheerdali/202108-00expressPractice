/**
 * cookier-parser
 */

const iKexpress = require('express');
const iKmorgan = require('morgan')

const iKcookieParser = require('cookie-parser')

const iKcors = require('cors')
 


const iKapp = iKexpress();
iKapp.use(iKmorgan('dev'))
iKapp.use(iKcors())

iKapp.use(iKcookieParser())


iKapp.get('/', (req, res) => {
    res.cookie('iKkey2', 'iKvalue2')

        // Cookies that have not been signed
    console.log('Cookies: ', req.cookies)
 
        // Cookies that have been signed
    console.log('Signed Cookies: ', req.signedCookies)

    res.send('iK Rechad Kheerdali');
});

const iKport = process.env.PORT || 3000;
iKapp.listen(iKport, () => console.log('iK server on port 3000'));


/**
 * 1+ client side could gain cookier through 'document.cookie' , but no other way.
 *  +\ iK? however not ideal to use for CSR, but good for SSR
 * 
 */