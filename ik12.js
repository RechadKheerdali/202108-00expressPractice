/**
 * express url routing :parameters
 */

const iKexpress = require('express');

const iKapp = iKexpress();

iKapp.get('/', (req, res) => {
    res.send('iK Rechad Kheerdali');
});

//setting routing paramenters with a optional pathname
iKapp.get('/ikpath1/:iKparameterK1/:iKparameterK2', (req, res) => {
    console.log(req.params)
    res.send( req.params ) //+1
});
//eg. if client sends http://localhost:3000/ikpath1/iKparamV1/iKparamV2 than the return value will be {"iKparameterK1":"iKparamV1","iKparameterK2":"iKparamV2"}

const iKport = process.env.PORT || 3000;
iKapp.listen(iKport, () => console.log('iK server on port 3000'));

/**
 *  VIP When using routing parameters than the client must enter values for the url routing parameters otherwise error
 * - So routing parameters are not optional for the client side
 * BIM both server and client params are case sensitive
 * You can add as many or little routing parameters as you want
 * Useful for user id, to find the user database data. Plus other things too
 * The clientside could alternatively use .dots or -hyphen instead of using /forward slash
 * Since the hyphen (-) and the dot (.) are interpreted literally, they can be used along with route parameters for useful purposes.
 * 1+ By default it will send data as json to the client side
 */