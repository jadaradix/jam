"use strict";

const AdComponent = require("../AdComponent.js");
const AdComponentProperties = require("../AdComponentProperties");

const ProductInfoBox = Object.create(AdComponent);

ProductInfoBox.name = "Product Info Box";
ProductInfoBox.addProperties([
  Object.create(AdComponentProperties.BackgroundColour),
  Object.create(AdComponentProperties.Colour)
]);
ProductInfoBox.markup =
`<div
  style="
    background-color: {{component.properties.backgroundColour.value}};
    color: {{component.properties.colour.value}};
  "
>
  <p>{{product.description}}</p>
</div>`;

module.exports = ProductInfoBox;