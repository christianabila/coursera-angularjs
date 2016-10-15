( function ()
  {
    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope)
    {
      $scope.lunchmenu = "";

      $scope.checkItems = function ()
      {
        var items = $scope.lunchmenu.split(',');

        if($scope.lunchmenu == "")
          $scope.messageDiv = "Please enter data first!";

        else if(items.length <= 3)
          $scope.messageDiv = "Enjoy!";

        else
          $scope.messageDiv = "Too much!";
      };
    }
  })();
