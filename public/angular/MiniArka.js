angular.module('MiniArkaApp', ['ngRoute']);

/* Controller for retrieving orders from db */
var orderListControl = function ($scope, miniArkaData) {

  $scope.message = "Current Orders:";

  miniArkaData
    .success(function(data) {
      $scope.data = { orders: data };
    })
    .error(function (e) {
      console.log(e);
   });

};

/* GET call to DB */
var miniArkaData = function ($http) {
  return $http.get('/api/get_orders');
};


angular
  .module('MiniArkaApp')
  .controller('orderListControl', orderListControl)
  .service('miniArkaData', miniArkaData);
