"use strict";

const Ad = require("../models/Ad.js");

const factory = function factory () {
  return [
    new Ad("Old Style"),
    new Ad("New Style")
  ];
};

module.exports = factory;