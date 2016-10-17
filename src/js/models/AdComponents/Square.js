"use strict";

const AdComponent = require("../AdComponent.js");
const AdComponentProperties = require("../AdComponentProperties");

const Square = Object.create(AdComponent);

Square.name = "Square";
Square.addProperties([
  Object.create(AdComponentProperties.BackgroundColour)
]);
Square.markup = `div(stylex="width: 32px; height: 32px; position: absolute; top: 0; left: 0; background-color: #{component.properties.backgroundColour.value};")`;

module.exports = Square;