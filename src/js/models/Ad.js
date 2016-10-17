"use strict";

const pug = require("pug");

const Ad = {
  name: "",
  components: [],
  addComponent: function addComponent (component) {
    this.components.push(component);
    return this;
  },
  addComponents: function addComponents (components) {
    this.components = this.components.concat(components);
    return this;
  },
  getHtml: function getHtml (product) {
    let html = `<div>` + this.components.map(component => component.getHtml(this, product)) + `</div>`;
    return html;
  }
};

module.exports = Ad;