angular.module('DOS', ['ngRoute'])
.config(function ($routeProvider) {
  $routeProvider
    .when('/users', {
      templateUrl: '/partials/users.html',
      controller: 'allUsersCtrl'
    })
    .when('/user/:id', {
      templateUrl: '/partials/user.html',
      controller: 'userCtrl'
    })
    .otherwise({
      redirectTo: '/users'
    });
})
.controller('allUsersCtrl', function($http, $scope) {
	$http({
    method: 'GET',
    url: '/data/data.json'
  })
  .then(function (resp) {
    $scope.users = resp.data;
  })
  .catch(function (error) {
    console.error(error);
  });

  $scope.viewUser = function(index) {
  	event.preventDefault();
  	console.log(index);
  };
})
.controller('userCtrl', function($routeParams, $scope, $http) {
	$http({
    method: 'GET',
    url: '/data/data.json'
  })
  .then(function (resp) {
    $scope.user = resp.data[$routeParams.id];
  })
  .catch(function (error) {
    console.error(error);
  });
});