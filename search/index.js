const express  = require('express');
const customerRouter = require('./routes/customerouter');
const mongoose = require('mongoose')
const app = express();


const port = 8001



const databaseUrl = 'mongodb://127.0.0.1:27017'

try{
    mongoose.connect(databaseUrl,{dbName:'customerService'})
    console.log('database connnected successfully')

}catch(error){
    console.log(error.message)
}


app.use(express.json());
app.use('/customer',customerRouter)



app.listen(port,()=>{
    console.log(`server connected at the port ${port}`)
})

