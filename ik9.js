/** UUID     */

const iKexpress = require('express');
const iKuuid = require('uuid')

const iKapp = iKexpress();

iKapp.get('/', (req, res) => {
    console.log(iKuuid.v4())

    res.send('iK Rechad Kheerdali');
});

iKapp.listen(3000, () => console.log('iK server on port 3000'));

/**
 * 
 * 
 */