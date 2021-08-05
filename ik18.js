/**     INCOMPLETE
 * Joi validation on the post server
 */

const iKexpress = require('express');
const iKmorgan = require('morgan')
const iKjoi = require('joi')

const iKapp = iKexpress();
iKapp.use(iKmorgan('dev'))

iKapp.use( iKexpress.urlencoded({extended: true}))

iKapp.get('/', (req, res) => {
    res.send('iK Rechad Kheerdali');
});

iKapp.post('/', (req, res) => {
    const iKschema = iKjoi.object().keys({
        iKname: iKjoi.string().trim().required(),
        iKemail: iKjoi.string().trim().email().required(),
        iKpassword: iKjoi.string().min(5).max(10).required()
    })

        // try{
        //     const validate = iKschema.validate( req.body )
        //     res.send(validate)
        // }catch(iKerr) {
        //     res.send(iKerr)
        // }
 
    // res.send( req.body );
});

const iKport = process.env.PORT || 3000;
iKapp.listen(iKport, () => console.log('iK server on port 3000'));

/**
 * 
 * 
 */