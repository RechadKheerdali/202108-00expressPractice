/**     express-session */

const iKexpress = require('express');
const iKsession = require('express-session');
const iKapp = iKexpress();

iKapp.use(iKsession({
    secret: 'iK my secret key',
    resave: true,
    saveUninitialized: true
}))

// session property created
iKapp.get('/', (req, res) => {
    req.session.iKpropertyName1 = 'iKpropertyValue1';
    res.send('iK Rechad Kheerdali');
});

// session property passed to other pathnames and is being used in this pathname
iKapp.get('/iksession', (req, res) => {
    const iKsessionValue = req.session.iKpropertyName1;
    res.send(iKsessionValue);
})

// all session properties destroyed so '/iksession' will get undefined value
iKapp.get('/ikdestroy', (req, res) => {
    req.session.destroy(() => {
        console.log('iKpropertyName1 Value destroyed from session')
    });
    res.end();
})

iKapp.listen(3000, () => console.log('iK server on port 3000'));

/**
 * 
 *  
 */