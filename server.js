const express = require('express');
const { errorHandler } = require('./middleware/errorHandler');
const connectDb = require('./config/dbconnection');
const app = express();

const dotenv = require('dotenv').config()

//Middleware
app.use(express.json())
app.use(errorHandler)

//Connectiong to MongoDb
connectDb()

app.use('/api/contacts',require('./routes/contactRoutes'))

app.use('/api/users',require('./routes/userRoutes'))

PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})

