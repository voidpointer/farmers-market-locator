/* Controllers */

var marketControllers = angular.module('marketControllers', []);

marketControllers.controller('MarketListCtrl', ['$scope', '$routeParams', '$location', '$http',
  function($scope, $routeParams, $location, $http) {
    $scope.zip = $routeParams.zipCode;
    $http.get('http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=' + $scope.zip).success(function(data) {
      $scope.markets = data.results;
    });
    $scope.searchZip = function() {
      $location.path("/markets/zip/" + $scope.zip);
    }
  }]);

marketControllers.controller('MarketDetailCtrl', ['$scope', '$routeParams', '$http', '$window', '$sce',
  function($scope, $routeParams, $http, $window, $sce) {
    $http.get('http://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=' + $routeParams.marketId).success(function(data) {
      $scope.market = data.marketdetails;
      $scope.market.Schedule = $sce.trustAsHtml($scope.market.Schedule);
    });
    $scope.goBack = function() {
      $window.history.back();
    }
  }]);