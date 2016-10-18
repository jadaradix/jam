"use strict";

const AdComponent = require("../AdComponent.js");
const AdComponentProperties = require("../AdComponentProperties");

const ProductInfoBox = Object.create(AdComponent);

ProductInfoBox.name = "Product Info Box";
ProductInfoBox.setProperties([
  Object.create(AdComponentProperties.BackgroundColour),
  Object.create(AdComponentProperties.Colour)
]);
ProductInfoBox.markup =
`<div
  style="
    margin: 16px 16px 0 16px;
    padding: 8px;
    background-color: {{component.properties.backgroundColour.value}};
    color: {{component.properties.colour.value}};
  "
>
  <p>{{product.description}}</p>
</div>`;

module.exports = ProductInfoBox;