const {Schema, model} = require('../connection');

const myschema = new Schema({
    name: {type:String, required: true},
    email: {type:String, required: true},
    password: String,
    contact: {type:String},  
    latitude: {type:String},
    longitude: {type:String},
    speciality: {type:String, required: true},
    image: {type:String},
    cer1: {type: String},
    cer2: {type:String},
    desc: {type: String},
    avatar: {type:String, default: "avatar_placeholder.webp"},
    createdAt: Date,
    notiToken: {type:String, default: ''}
});

module.exports = model('doctor',myschema);