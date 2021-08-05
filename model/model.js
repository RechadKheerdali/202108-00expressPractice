const iKmongoose = require('mongoose')

const iKschema = new iKmongoose.Mongoose.Schema({
    iKname: {
        type: String,
        required: true
    },
    iKemail: {
        type: String,
        required: true,
        unique: true
    },
    iKgender: String,
    iKstatus: String
})

const iKuserModel = iKmongoose.model('iKuser', iKschema)

module.exports = iKuserModel;