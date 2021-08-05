/**
 * DotEnv module
 */

const { config } = require('dotenv');
const iKexpress = require('express');

const iKapp = iKexpress();

require('dotenv').config()


iKapp.get('/', (req, res) => {
    res.send( process.env.IKDOTENV );
});

const iKport = process.env.PORT || 3000;
iKapp.listen(iKport, () => console.log('iK server on port 3000'));

/**
 * You can name the .env file if you wanted to, eg. iKconfig.env
 * - VIP If you do name the .env file, than you must insert the path to dotenv for it too work
 * -    - require('dotenv').config({path: 'iKconfig.env})
 * 
 */