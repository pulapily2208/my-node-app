const express = require("express");
const session = require("express-session"); 
const config = require ("config");
const bodyParser = require("body-parser");
const app = express();

app.use("/static", express.static(config.get("staticFolder")));
app.set("views", config.get("viewsFolder"));
app.set("view engine", config.get("viewEngine"));

app.use(bodyParser.urlencoded({extended: true }))

// Dùng cấu hình từ file config
app.set('trust proxy', config.get('trustProxy'));
app.use(session(config.get('session')));





app.use(require(config.get("router"))); // dùng router được import
module.exports = app;