/* App Module */

var marketApp = angular.module('marketApp', [
  'ngRoute',
  'marketControllers'
]);

marketApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/markets/zip/:zipCode', {
        templateUrl: 'partials/market-list.html',
        controller: 'MarketListCtrl'
      }).
      when('/markets/id/:marketId', {
        templateUrl: 'partials/market-detail.html',
        controller: 'MarketDetailCtrl'
      }).
      otherwise({
        redirectTo: '/markets/zip/60642'
      });
  }]);