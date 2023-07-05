const express = require("express")
const app = express()
app.use(express.static(__dirname + '/public'));
const bodyParser = require('body-parser');
const route = require("./routes/messages.js")
app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({ extended: false }));
app.use(route)
app.listen(3000)