"use strict";

const pug = require("pug");

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
    console.log(this.markup);
    const pugFunction = pug.compile(this.markup);
    const component = this;
    return pugFunction({
      ad,
      component,
      product
    });
  }
};

module.exports = AdComponent;