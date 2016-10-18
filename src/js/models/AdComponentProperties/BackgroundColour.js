"use strict";

const AdComponentProperty = require("../AdComponentProperty.js");

const BackgroundColour = Object.create(AdComponentProperty);

BackgroundColour.name = "Background Colour";
BackgroundColour.inCodeName = "backgroundColour";
BackgroundColour.value = "#311b50";

module.exports = BackgroundColour;