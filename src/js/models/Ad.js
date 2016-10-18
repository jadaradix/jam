"use strict";

const handlebars = require("handlebars");

handlebars.registerHelper("adComponent", function (ad, products, component) {
  return new handlebars.SafeString(component.getHtml(ad, products));
});

const Ad = {
  name: "",
  width: 300,
  height: 250,
  html: "",
  components: [],
  addComponent: function addComponent (component) {
    this.components.push(component);
    return this;
  },
  addComponents: function addComponents (components) {
    this.components = this.components.concat(components);
    return this;
  },
  updateHtml: function updateHtml (html) {
    this.html = html;
  },
  getHtml: function getHtml (products) {
    let markup =
    `
      <div
        style="
          font: 12px 'Arial', sans-serif;
          position: relative;
          width: {{ad.width}}px;
          height: {{ad.height}}px;
          border: 1px solid black;
        "
      >
        {{#each ad.components}}
          {{adComponent ../ad ../products this}}
        {{/each}}
      </div>
    `;
    const template = handlebars.compile(markup);
    return template({
      "ad": this,
      "products": products
    });
  }
};

module.exports = Ad;