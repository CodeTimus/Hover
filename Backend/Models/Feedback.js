const {Schema, model} = require('../connection')
const FeedbackSchema = new Schema({
    name: String,
    email: String, 
    Feedback: String
});
module.exports = model('Feedback', FeedbackSchema)