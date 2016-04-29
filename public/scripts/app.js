angular.module('DOS', [])
.controller('allUsersCtrl', function($http, $scope) {
	$http({
    method: 'GET',
    url: '/data/data.json'
  })
  .then(function (resp) {
    console.log(resp.data);
  })
  .catch(function (error) {
    console.error(error);
  });
});