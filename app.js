"use strict";

//Module
const express = require("express");
const app = express();

//Routing
const home = require("./routes/home");

//App setting
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home);

module.exports = app;