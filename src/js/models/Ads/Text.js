"use strict";

const AdComponents = require("../AdComponents");
const Ad = Object.create(
  require("../Ad.js")
);

Ad.name = "Without Image";
Ad.addComponents([
  Object.create(AdComponents.ProductInfoBox),
  Object.create(AdComponents.LinkButton)
]);

module.exports = Ad;