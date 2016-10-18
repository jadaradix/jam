"use strict";

const AdComponent = require("../AdComponent.js");
const AdComponentProperties = require("../AdComponentProperties");

const LinkButton = Object.create(AdComponent);

LinkButton.name = "Link Button";
LinkButton.setProperties([
  Object.create(AdComponentProperties.BackgroundColour),
  Object.create(AdComponentProperties.Colour)
]);
LinkButton.markup =
`<a
  href="{{product.link}}"
  style="
    display: block;
    margin: 16px 32px 0 32px;
    padding: 8px;
    text-align: center;
    border-radius: 5px;
    text-decoration: none;
    background-color: {{component.properties.backgroundColour.value}};
    color: {{component.properties.colour.value}};
  "
  target="_blank"
>
  View Product
</a>`;

module.exports = LinkButton;