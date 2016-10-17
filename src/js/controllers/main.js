"use strict";

const controller = function controller ($scope, $element, adsFactory, $sce) {

  $scope.ads = adsFactory;
  $scope.currentAd = $scope.ads[0] || null;

  $scope.products = [
    {
      "name": "Testy Test",
      "description": "It's nice!"
    }
  ];
  $scope.currentProduct = $scope.products[0] || null;

  $scope.$watch("currentAd", () => {
    $scope.updateHtml();
  });

  $scope.updateHtml = function updateHtml () {
    $scope.currentAd.updateHtml(
      $sce.trustAsHtml(
        $scope.currentAd.getHtml($scope.currentProduct)
      )
    );
  };
  $scope.updateHtml();

};

module.exports = controller;