const express = require("express");
const config = require ("config");
const bodyParser = require("body-parser");
const app = express();

app.use("/static", express.static(config.get("staticFolder")));
app.set("views", config.get("viewsFolder"));
app.set("view engine", config.get("viewEngine"));

app.use(bodyParser.urlencoded({extended: true }))







app.use(require(config.get("router"))); // dùng router được import
module.exports = app;