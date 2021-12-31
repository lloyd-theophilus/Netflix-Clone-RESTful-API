const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const moviesRoute = require('./routes/movies')
const listRoute = require('./routes/lists')

dotenv.config()

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.DB_CONNECTION, );
  console.log('Database connected')
}


const port = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/movies', moviesRoute)
app.use('/api/lists', listRoute)

app.listen(port, () => console.log('Server running on port '  +port))