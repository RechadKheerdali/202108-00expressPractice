const iKexpress = require('express');

const iKapp = iKexpress();

iKapp.get('/pathname1', (req, res) => {
    console.log(process.env.PORT)
    res.send('iK Rechad Kheerdali');
});

iKapp.listen(process.env.PORT || 3000, () => console.log('iK server on port 3000'));