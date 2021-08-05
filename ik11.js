/** parsing form data and json data */

const iKexpress = require('express');

const iKapp = iKexpress();

iKapp.use( iKexpress.json() )
iKapp.use( iKexpress.urlencoded({extended: true}) )

iKapp.get('/', (req, res) => {
    res.send('iK Rechad Kheerdali');
});

iKapp.post('/', (req, res) => {
    console.log( req.body )
    res.send(req.body);
});

const iKport = process.env.PORT || 3000;
iKapp.listen(iKport, () => console.log('iK server on port 3000'));

/**
 * 
 * 
 */