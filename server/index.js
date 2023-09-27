const express = require('express')
const connectDatabase = require('./config/db')
const app = express()

connectDatabase();


app.get('/', (req, res) => {
     res.send('hi i am backend server')
})

const port = 8000;
app.listen(port, () => {
     console.log((`app listening on port : ${port}`));
})