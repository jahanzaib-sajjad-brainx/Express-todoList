
const express=require('express')
const port=4000

const app = express()
app.use(express.json())


app.use("/", require('./routes/RouteClass'))


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })