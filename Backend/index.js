const express =require('express');
const app = express();
const port = 3000;
const cors = require('cors')

app.use(cors({
    origin: ['http://localhost:5173']
}))

const UserRouter=require('./Routers/User')
const ContactRouter=require('./Routers/Contact')
const FeedbackRouter=require('./Routers/Feedback')
const DoctorsRouter = require('./Routers/Doctor');
const UtilsRouter = require("./Routers/Utils")

// Middleware
app.use(express.json());
app.use('/user',UserRouter)
app.use('/contact',ContactRouter)
app.use('/Feedback',FeedbackRouter)
app.use('/doctor', DoctorsRouter);
app.use("/util" , UtilsRouter);

app.listen(port,() =>{
    console.log('Server is Running at the port 3000')
})