/** ejs template engine 
 * 
*/

const iKexpress = require('express');
const iKpath = require('path')

const iKapp = iKexpress();

//Set the ejs template engine to express
iKapp.set('view engine', 'ejs');
iKapp.use( '/static', iKexpress.static( iKpath.join(__dirname, 'public')) )


iKapp.get('/', (req, res) => {
    console.dir( __filename )
    res.render(
        'index',
        {iKparagraph: 'is the greatest dad in the world'}
    )
});

iKapp.get('/ikcssfile', (req, res) => {
    res.sendFile( iKpath.join(__dirname, 'public/ikcss.css') )
})

iKapp.listen(3000, () => console.log('iK server on port 3000'));

/**
 * 
 * 
 */