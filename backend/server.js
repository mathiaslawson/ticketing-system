const express = require('express')
const dotenv= require('dotenv').config()
const PORT = process.env.PORT || 9000
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/users', require('./routes/userRoutes'))



app.listen(PORT, ()=>console.log(`Server is running no ${PORT}`))