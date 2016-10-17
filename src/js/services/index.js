"use strict";

const app = require("angular").module("app");
app.service("httpService", require("./http.js"));
app.service("productsService", require("./products.js"));