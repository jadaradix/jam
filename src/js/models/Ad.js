"use strict";

const handlebars = require("handlebars");

handlebars.registerHelper("adComponent", function (ad, product, component) {
  return new handlebars.SafeString(component.getHtml(ad, product));
});

const Ad = {
  name: "",
  width: 300,
  height: 250,
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
    let markup =
    `
      <div
        style="
          width: {{ad.width}}px;
          height: {{ad.height}}px;
          border: 1px solid black;
        "
      >
        {{#each ad.components}}
          {{adComponent ../ad ../product this}}
        {{/each}}
      </div>
    `;
    const template = handlebars.compile(markup);
    return template({
      "ad": this,
      "product": product
    });
  }
};

module.exports = Ad;