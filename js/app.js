var app = angular.module('AddressbookApp', []);
app.controller('Maincontroller', function($scope, $http){
  $http.get('http://www.bindows.net/documentation/download/ab.xml',
  {
    transformResponse: function (cnv) {
      var x2js = new X2JS();
      var aftCnv = x2js.xml_str2json(cnv);
      return aftCnv;
    }
  })
    .then(function(response) {
      console.log(response.data)
      $scope.contacts = response.data.AddressBook.Contact
  }, function error(response) {
    $scope.contacts = response.statusText;
  });
});