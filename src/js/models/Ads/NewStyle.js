"use strict";

const Ad = require("../Ad.js");
const AdComponents = require("../AdComponents");

const NewStyle = Object.create(Ad);

NewStyle.name = "New Style";
NewStyle.addComponents(
  Object.create(AdComponents.ProductInfoBox),
  Object.create(AdComponents.LinkButton),
  Object.create(AdComponents.Square)
);

module.exports = NewStyle;