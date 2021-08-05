/*          INCOMPLETE

express middleware   */

const iKexpress = require('express');
const iKapp = iKexpress();

//My first custom middleware
const iKmiddleware1 = (req, res, next) => {
    console.log('from iKmiddleware1');
    next();
};

//My second custom middleware
const iKmiddleware2 = (req, res, next) => {
    console.log('from iKmiddleware2');
    next();
};

//Set up the iKmiddleware1 middleware to all url routes of node express app
iKapp.use(iKmiddleware1)

//iKmiddleware2 middleware is only exclusive to '/' url route but first iKmiddleware1 will be executed before
iKapp.get('/', iKmiddleware2, (req, res) => {
    console.log('from main final function on / route')
    res.end();
});
/*OP:
    'from iKmiddleware1'
    'from iKmiddleware2'
    'from main final function on / route'  */

const iKport = process.env.PORT || 3000
iKapp.listen(iKport, () => console.log(`iK server on port ${iKport}`));


/*
- VIP order of middleware is crucial as it will run in the exact same order you place them
- VIP You must use the next() parameter when you finish your middleware function otherwise your server will hang and not fully execute
- BIM any changes you do in your middleware will be passed onto the next middleware and your main final function
--   ideal to do certain task on the incoming req parameter and pass it onto the next middleware or main final function
*/