"use strict";

const Image = require("../models/Ads/Image.js");
const Text = require("../models/Ads/Text.js");

const factory = function factory () {
  return [
    Object.create(Image),
    Object.create(Text)
  ];
};

module.exports = factory;