"use strict";

const Ad = require("../Ad.js");
const AdComponents = require("../AdComponents");

const OldStyle = Object.create(Ad);

OldStyle.name = "Old Style";
OldStyle.addComponents(
  Object.create(AdComponents.ProductInfoBox),
  Object.create(AdComponents.LinkButton)
);

module.exports = OldStyle;