"use strict";

const abstractedMethod = function (method, route, data, callback) {
  if (this.url === null) {
    return callback("this.url is null; call setUrl()!");
  }
  const fullUrl = this.url + "/" + route;
  let promise = null;
  if (method === "get") {
    // get doesn't take a body
    promise = this.$http[method](fullUrl);
  } else {
    // post/patch take a body
    promise = this.$http[method](fullUrl, data);
  }
  return promise.then(
    function success (response) {
      if (response.status !== 200) {
        return callback("Non-200 status code");
      }
      return callback(false, response.data);
    },
    function error (response) {
      return callback("Generic error (error promise block)");
    }
  );
};

const service = function service ($http) {

  this.$http = $http;
  this.url = "";

  this.setUrl = function setUrl (url) {
    this.url = url;
  };

  this.get = function (route, callback) {
    return abstractedMethod.call(this, "get", route, null, callback);
  };

  this.post = function (route, data, callback) {
    return abstractedMethod.call(this, "post", route, data, callback);
  };

  this.patch = function (route, data, callback) {
    return abstractedMethod.call(this, "patch", route, data, callback);
  };

  this.delete = function (route, callback) {
    return abstractedMethod.call(this, "delete", route, null, callback);
  };

};

module.exports = service;