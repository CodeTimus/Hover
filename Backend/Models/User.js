const {Schema, model} = require('../connection')
const userSchema = new Schema({
    fname: String,
    lname: String,
    email: String,
    phoneNo: Number,
    message: String,
});
module.exports = model('user', userSchema)