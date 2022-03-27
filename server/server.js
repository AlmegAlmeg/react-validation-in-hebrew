const express = require('express')
require('dotenv').config()
require('./DB/dbConnection')
const cors = require('cors')
const morgan = require('morgan')
const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan(":method :url :status :response-time ms"))

const PORT = process.env.SERVER_PORT || 5000
app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`))

const usersRouter = require('./routes/users')

app.use('/users' ,usersRouter)

module.exports = app