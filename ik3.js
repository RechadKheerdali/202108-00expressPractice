/*                 serving static files
        */
       
const iKexpress = require('express');
const iKpath = require('path')

const iKapp = iKexpress();

iKapp.use( '/static', iKexpress.static( iKpath.join(__dirname, 'public')) )

iKapp.get('/', (req, res) => {
    res.send('<h1>iK Rechad Kheerdali</h1>');
});

iKapp.listen(3000, () => console.log('iK server on port 3000'));