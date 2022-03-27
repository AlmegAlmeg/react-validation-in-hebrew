const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URL)
    .then(()=> console.log('Connected to database'))
    .catch((err)=> console.error(`An error occured! ${error}`))