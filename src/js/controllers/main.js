"use strict";

const controller = function controller ($scope, $element, adsFactory) {

  $scope.ads = adsFactory;
  $scope.currentAd = $scope.ads[0] || null;

  $scope.currentProduct = {
    "name": "Testy Test",
    "description": "It's nice!"
  };

  $scope.getHtml = function getHtml () {
    let html = $scope.currentAd.getHtml($scope.currentProduct);
    console.log(html);
  };
  $scope.getHtml();

};

module.exports = controller;