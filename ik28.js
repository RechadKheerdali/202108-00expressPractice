/**
 * passing a value through within next() for the next middleware
 */

const iKexpress = require('express');
const iKmorgan = require('morgan')

const iKapp = iKexpress();
iKapp.use(iKmorgan('dev'))

function iKmiddleware1 (req, res, next) {
    const iKmessage = 'iK I am a messager'
    next(iKmessage)
}

function iKerrorHandler (iKmessageP, req, res, next) {
    console.log(iKmessageP)
    next()
}

iKapp.get('/', iKmiddleware1, iKerrorHandler, (req, res) => {
    res.send('iK Rechad Kheerdali');
});

iKapp.use( (req, res) => res.send('iK error occured') )

const iKport = process.env.PORT || 3000;
iKapp.listen(iKport, () => console.log('iK server on port 3000'));

/**
 * 
 * 
 */