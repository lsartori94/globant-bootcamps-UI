'use strict';

angular.module('appNameApp')
  .controller('MainCtrl', function ($scope,) {
    
   $scope.Series = [
      {
      name:"Lost",
      episodes:"3",
      genre:"Drama- Scince-Fiction"

      },
      {
        name:"Game of thrones",
        episodes:"4",
        genre:"Medieval Fantasy"
    
       },
       {
        name:"Breaking Bad",
        episodes:"345",
        genre:"Police Drama"
        
         }
     
    ];
    $scope.addItem = function () {
      $scope.errortext = "";
      if (!$scope.addMe) {return;}
      if ($scope.Series.indexOf($scope.addMe) == -1) {
          let newSerie= new serie($scope.addMe,$scope.addepi,$scope.addgen)
          $scope.Series.push(newSerie);
      } else {
          $scope.errortext = "The serie is already in your series list.";
      }
      $scope.addMe=""; 
      $scope.addepi="";
      $scope.addgen="";
  }
  $scope.removeItem = function () {
      $scope.errortext = "";
      $scope.Series.splice($scope.index, 1);
  } 
  $scope.updateItem = function () {
    $scope.errortext = "";
  
        let newSerie2= new serie($scope.addMe2,$scope.addepi2,$scope.addgen2)
        $scope.Series[$scope.index]= newSerie2; 
        $scope.addMe2=""; 
        $scope.addepi2="";
        $scope.addgen2="";
}
$scope.saveIndex = function (x) {
  $scope.errortext = "";
  $scope.index = x;
    
  
} 



  
  });

