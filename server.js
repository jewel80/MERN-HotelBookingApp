const express = require('express')
const app = express()

const dbconfig = require('./db')

app.get("/", (req, res) => res.send("Hello World!"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Example app listening on port - ${port}!`))