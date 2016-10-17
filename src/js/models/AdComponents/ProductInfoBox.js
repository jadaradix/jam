"use strict";

const AdComponent = require("../AdComponent.js");
const AdComponentProperties = require("../AdComponentProperties");

const ProductInfoBox = Object.create(AdComponent);

ProductInfoBox.name = "Product Info Box";
ProductInfoBox.addProperties([
  Object.create(AdComponentProperties.BackgroundColour),
  Object.create(AdComponentProperties.Colour)
]);
// ProductInfoBox.markup = `div(stylex="background-color: #{component.properties.backgroundColour.value}; color: #{component.properties.colour.value};")
  // p #{product.description} (#{component.properties.backgroundColour.value})`;
ProductInfoBox.markup = "div(id='#{product}') #{product}";

module.exports = ProductInfoBox;