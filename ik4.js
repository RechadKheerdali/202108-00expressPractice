/*         express routing
 */

const iKexpress = require('express');
const iKrouter = require('./router.js')
const iKapp = iKexpress();

iKapp.use('/api', iKrouter);

iKapp.listen(3000, () => console.log('iK server on port 3000'));