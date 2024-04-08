const mongoose=require('mongoose');
const url = "mongodb+srv://882001gautam:Sg896034@cluster0.cmrm5l6.mongodb.net/EDS?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(url)

.then((result) => {
    console.log('connected to the database')
    
}).catch((err) => {
    console.log(err)
    
});
module.exports = mongoose;