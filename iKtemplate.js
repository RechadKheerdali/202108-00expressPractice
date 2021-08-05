/** */

const iKexpress = require('express');
const iKmorgan = require('morgan')

const iKapp = iKexpress();
iKapp.use(iKmorgan('dev'))

iKapp.get('/', (req, res) => {
    res.send('iK Rechad Kheerdali');
});

const iKport = process.env.PORT || 3000;
iKapp.listen(iKport, () => console.log('iK server on port 3000'));

/**
 * 
 * 
 */