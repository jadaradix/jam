"use strict";

const controller = function controller ($scope, $element, $sce, adsFactory, productsService) {

  $scope.ads = adsFactory;
  $scope.currentAd = $scope.ads[0] || null;

  $scope.products = [];
  $scope.currentProduct = null;
  productsService.get((error, products) => {
    if (error) {
      return alert(`Error loading products (${error}); returning.`);
    }
    $scope.products = products;
    $scope.currentProduct = $scope.products[0] || null;
  });

  // $scope.$watch("currentAd", () => {
  //   $scope.updateHtml();
  // });

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