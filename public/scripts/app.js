angular.module('DOS', [])
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
});