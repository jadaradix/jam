"use strict";

const AdComponent = require("../AdComponent.js");
const AdComponentProperties = require("../AdComponentProperties");

const LinkButton = Object.create(AdComponent);

LinkButton.name = "Link Button";
LinkButton.addProperties([
  Object.create(AdComponentProperties.BackgroundColour),
  Object.create(AdComponentProperties.Colour)
]);
LinkButton.markup = `a(href="#{product.link}" stylex="background-color: #{component.properties.backgroundColour.value}; color: #{component.properties.colour.value};") View Product`;

module.exports = LinkButton;