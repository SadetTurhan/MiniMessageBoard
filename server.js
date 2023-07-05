const express = require("express")
const app = express()
const bodyParser = require('body-parser');

app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({ extended: false }));
const route = require("./routes/messages")
app.use(route)
app.listen(3000)