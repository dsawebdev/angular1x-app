app.controller('MainController', ['$scope', 'address', function($scope, address) {
  address.success(function(data) {
    $scope.directory=data;
  })
}])