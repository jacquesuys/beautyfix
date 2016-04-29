angular.module('DOS', [])
.controller('allUsersCtrl', function($http, $scope) {
	$http({
    method: 'GET',
    url: '/data/data.json'
  })
  .then(function (resp) {
  	console.log(resp.data);
    $scope.users = resp.data;
  })
  .catch(function (error) {
    console.error(error);
  });

  $scope.viewUser = function(index) {
  	event.preventDefault();
  	console.log(index);
  };
});