
const express=require('express')
const port=4000
const mongoose = require('mongoose')

const app = express()
app.use(express.json())


app.use("/", require('./routes/TodoRoutes'))
app.use("/",require('./routes/UsersRoutes'))

mongoose.connect('mongodb://127.0.0.1/todolist')
.then(res => {
  console.log("Database connected successfully...")
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })