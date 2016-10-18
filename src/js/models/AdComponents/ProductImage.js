"use strict";

const AdComponent = require("../AdComponent.js");
const AdComponentProperties = require("../AdComponentProperties");

const ProductImage = Object.create(AdComponent);

ProductImage.name = "Product Image";
ProductImage.setProperties([]);
ProductImage.markup =
`<img
  style="
    display: block;
    width: 120px;
    margin: 16px auto 0 auto;
    background-color: black;
  "
  src="{{product.img}}"
>`;

module.exports = ProductImage;