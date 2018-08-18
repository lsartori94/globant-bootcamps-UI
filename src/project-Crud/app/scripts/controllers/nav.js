'use strict';


angular.module('projectCrudApp')
  .controller('NavCtrl', function ($scope,$localStorage) {
        $scope.$storage = $localStorage;
        $scope.changeTheme = function() { 
            if ($scope.$storage.theme == "Ligth") {
                $scope.$storage.theme = "Dark"
            }
            else{
                $scope.$storage.theme = "Ligth"
            }
        }
    });