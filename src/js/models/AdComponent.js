"use strict";

const handlebars = require("handlebars");

const AdComponent = {
  name: "",
  properties: {},
  markup: "",
  addProperty: function addProperty (property) {
    this.properties[property.inCodeName] = property;
    return this;
  },
  addProperties: function addProperties (properties) {
    properties.forEach(property => {
      this.properties[property.inCodeName] = property;
    });
    return this;
  },
  getHtml: function getHtml (ad, product) {
    const template = handlebars.compile(this.markup);
    return template({
      "ad": ad,
      "component": this,
      "product": product
    });
  }
};

module.exports = AdComponent;