/** pug template engine */

const iKexpress = require('express');

const iKapp = iKexpress();

iKapp.set('view engine', 'pug');

iKapp.get('/', (req, res) => {
    res.render(
        'index',
        {iKparagraph: 'is the greatest dad in the world'}
    );
});

iKapp.listen(3000, () => console.log('iK server on port 3000'));

/**
 * 
 * 
 */