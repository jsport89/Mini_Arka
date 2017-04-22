angular.module('MiniArkaApp', ['ngRoute']);

var orderListControl = function ($scope, miniArkaData) {

 // $scope.data = { orders: miniArkaData };

  console.log("********inside orderListControl function")
  $scope.message = "Current Orders:";

  miniArkaData
    .success(function(data) {
      console.log("**********Got the goods.");
      $scope.data = { orders: data };
    })
    .error(function (e) {
      $scope.message = "Sorry, something's gone wrong ";
      console.log(e);
   });

};

/*
var miniArkaData = function () {
  return [{
     userid: 'asdb1234',
     quantity: 123456
  }, {
    userid: '0987asdf',
    quantity: 0987654
    }];
};
*/
var miniArkaData = function ($http) {
  console.log("Inside miniArkaData")
  var to_return = $http.get('/api/get_orders');
  console.log("Returning this: " + to_return);
  return to_return;
};


angular
  .module('MiniArkaApp')
  .controller('orderListControl', orderListControl)
  .service('miniArkaData', miniArkaData);
