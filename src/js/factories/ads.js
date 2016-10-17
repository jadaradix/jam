"use strict";

const OldStyle = require("../models/Ads/OldStyle.js");
const NewStyle = require("../models/Ads/NewStyle.js");

const factory = function factory () {
  return [
    Object.create(OldStyle),
    Object.create(NewStyle)
  ];
};

module.exports = factory;