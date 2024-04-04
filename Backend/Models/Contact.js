const {Schema, model} = require('../connection')
const contactSchema = new Schema({
    fname: String,
    lname: String,
    phoneNo: Number,
    email: String,
    password: String
});
module.exports = model('contact', contactSchema)