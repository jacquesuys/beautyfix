var app = angular.module('DOS', ['ngRoute'])

app.config(function ($routeProvider) {
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
});

app.factory('selectUser', function() {
  var savedData = {}
  function set(data) {
    savedData = data;
  }
  
  function get() {
    return savedData;
  }
  
  return {
    set: set,
    get: get
  }
});

app.controller('allUsersCtrl', function($scope, $http, selectUser) {
  $scope.users = [];
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

  $scope.logger = function(obj) {
    selectUser.set(obj);
  };
});

app.controller('userCtrl', function($scope, $location, selectUser) {
  var user = selectUser.get();
  !user.first_name ? $location.path('/users') : $scope.user = user;
});