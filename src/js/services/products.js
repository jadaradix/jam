"use strict";

const JAM_API_URL = "http://localhost:8080";

const service = function service (httpService) {
  httpService.setUrl(JAM_API_URL);
  this.get = function get (callback) {
    return httpService.get("products", callback);
  };
};

module.exports = service;