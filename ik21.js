/**
 * express handlebar (SSRS)
 */
const iKexpress = require('express');

const iKexphbs  = require('express-handlebars');
const iKmorgan = require('morgan')

const iKapp = iKexpress();
iKapp.use(iKmorgan('dev'))

//set express-handlebar to node express app
iKapp.engine('handlebars', iKexphbs());
iKapp.set('view engine', 'handlebars');

iKapp.get('/', (req, res) => {
    res.render(
        'home', //home.handlebars file
        {iKdad: 'rechad'}
    );
});

const iKport = process.env.PORT || 3000;
iKapp.listen(iKport, () => console.log('iK server on port 3000'));

/**
 * 
 * 
 */