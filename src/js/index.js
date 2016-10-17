"use strict";

const angular = require("angular");
require("angular-sanitize");

const app = require("angular").module("app", ["ngSanitize"]);

require("./factories");
require("./controllers");
require("./services");