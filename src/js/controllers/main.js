"use strict";

const controller = function controller ($scope, $element, adsFactory) {

  $scope.ads = adsFactory;
  $scope.currentAd = $scope.ads[0] || null;

};

module.exports = controller;