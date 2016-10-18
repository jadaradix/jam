"use strict";

const AdComponent = require("../AdComponent.js");
const AdComponentProperties = require("../AdComponentProperties");

const ProductImage = Object.create(AdComponent);

ProductImage.name = "Product Image";
ProductImage.setProperties([]);
ProductImage.markup =
`<img
  style="
    background-color: black;
  "
  src="{{product.img}}"
>`;

module.exports = ProductImage;