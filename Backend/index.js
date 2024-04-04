const express =require('express');
const app = express();
const port = 3000;
const cors = require('cors')

app.use(cors({
    origin: ['http://localhost:5173']
}))

const UserRouter=require('./Routers/User')
const ContactRouter=require('./Routers/Contact')

// Middleware
app.use(express.json());
app.use('/user',UserRouter)
app.use('/contact',ContactRouter)

app.listen(port,() =>{
    console.log('Server is Running at the port 3000')
})