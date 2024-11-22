const express  = require('express');
const mongoose = require('mongoose');
const bookRouter = require('./src/routes/bookRoute')
const app = express();


const port = 8000;

const databaseUrl = 'mongodb://127.0.0.1:27017'

try{
    mongoose.connect(databaseUrl,{dbName:'microservice'})
    console.log('database connnected successfully')

}catch(error){
    console.log(error.message)
}


app.use(express.json());
app.use('api/book',bookRouter)




app.use(express.json());
app.use('/',(req,res,next)=>{
    return res.status(200).json({ message:'hello procut coming'})
})


app.listen(port,()=>{
    console.log(`server connected at the port ${port}`)
})