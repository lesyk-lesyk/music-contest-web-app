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
  .when('/settings', {
    templateUrl : 'partials/settings.html',
  })
  .when('/login', {
    controller : 'loginController',
    templateUrl : 'partials/login.html',
  })
  .when('/register', {
    controller : 'registerController',
    templateUrl : 'partials/register.html',
  })
  .otherwise({
    templateUrl : 'partials/404.html',
  });
});

mContest.controller('mainController', ['$scope', '$location', 'user',  function($scope, $location, user){
  console.log('mainController');
  $scope.isAuthorised = user.isAuthorised;
  $scope.logout = function(){
    user.logout();
    $location.path('/');
  }
}]); 

mContest.controller('loginController', ['$scope', '$location', 'user', function($scope, $location, user){
  $scope.login = function(){
    user.login();
    $location.path('/theory');
  }
}]); 

mContest.controller('registerController', ['$scope', '$location', 'user', function($scope, $location, user){
  $scope.login = function(){
    user.login();
    $location.path('/theory');
  }
}]); 

mContest.controller('homeController', ['$scope', function($scope){
  console.log('homeController');
}]); 



mContest.factory('user', ['$http', function ($http) {
  var authorised = false;

  function isAuthorised(){
    return Boolean(authorised);
  }

  function login(name){
    authorised = true;
  }

  function logout(){
    authorised = false;
  }

  var factory = {
    login: login,
    logout: logout,
    isAuthorised: isAuthorised
  };

  return factory;
}]);
