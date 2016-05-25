var mContest = angular.module('mContest', ['ngRoute']);

mContest.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    controller : 'homeController',
    templateUrl : 'partials/home.html',
  })
  .when('/theory', {
    templateUrl : 'partials/theory.html',
  })
  .when('/tests', {
    templateUrl : 'partials/tests.html',
  })
  .when('/info', {
    templateUrl : 'partials/info.html',
  })
  .otherwise({
    templateUrl : 'partials/404.html',
  });
});

mContest.controller('homeController', ['$scope', function($scope){
  console.log('homeController');
}]); 
