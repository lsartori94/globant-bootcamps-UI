'use strict';
/**
 * @ngdoc function
 * @name App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the App
 */




angular.module('App')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });



    
 App.controller ('mainController2', function ($scope, $localStorage,
  $sessionStorage){
    
  //Para guardar el theme en el localStorage
    $scope.$storage = $localStorage.$default({
      theme: 1
  });

    //Chequea que tema tenía guardado y lo asigna
  $scope.checkTheme = function () {
   
    switch ($localStorage.theme) {
      case 1:
        $scope.theme1();
          break;
      case 2:
        $scope.theme2();
        
      }
      
};

//Cambia de theme. Lo hice con switch por si quería agregar más después
  $scope.toggleTheme = function () {

    switch ($scope.$storage.theme) {
      case 1: {
           $scope.$storage.theme=2;
          $scope.theme2();
          break; }
      case 2:{
      $scope.$storage.theme=1
      $scope.theme1();
    }
        
      }
    
};
//Cambia de theme
$scope.theme2 = function(){
  var elem = angular.element(document.querySelector('#bg'));
  angular.element(elem).css( 'background-image', 'url("images/theme1.jpg")');
  var elem2 = angular.element(document.querySelector('#tittleHeader'));
  angular.element(elem2).css( 'color', '#212529');
  var elem3 = angular.element(document.querySelector('.quoteAutor'));
      angular.element(elem3).css( 'color', '#212529');
}
  //Cambia de theme  
$scope.theme1 = function(){
  var elem = angular.element(document.querySelector('#bg'));
      angular.element(elem).css( 'background-image', 'url("images/theme2.jpg")');
      angular.element(elem).css( 'color', 'white');
  var elem2 = angular.element(document.querySelector('#tittleHeader'));
      angular.element(elem2).css( 'color', '#FACC91');
  var elem3 = angular.element(document.querySelector('.quoteAutor'));
      angular.element(elem3).css( 'color', '#FACC91');
      
}
    
  //preparo el primer elemento de la lista 
  $scope.submitted = false;
  let game1 = new game ("Nomdedeu, Patricio","Nomdedeu, Luis","1-0","1. e4 d5 2. exd5 Nf6 3. Nf3 Nxd5 4. d4 Bg4...");
  $scope.games=[game1];
   

 

//Funciones para el CRUD
  $scope.addGame = function() {
  let newGame = new game ($scope.newGame.white,
                          $scope.newGame.black,
                         $scope.newGame.result, 
                         $scope.newGame.moves);

   $scope.games.push(newGame);
   $scope.submitted = true;
   $scope.resetAddForm();
 
  }
  
  
  
  $scope.closeAddForm = function (){
    $scope.newGame = {};
    $scope.addForm.$setPristine();
    $scope.submitted = false;
    
   }
  $scope.resetAddForm = function (){
    $scope.newGame = {};
    $scope.addForm.$setPristine();
    
   }
 


  $scope.deleteGame = function (index){
   $scope.games.splice(index, 1)
  }

  $scope.selectGame = function (index){
   $scope.selectedGame = new game();
   $scope.selectedGame.white = $scope.games[index].white;
   $scope.selectedGame.black = $scope.games[index].black;
   $scope.selectedGame.result = $scope.games[index].result;
   $scope.selectedGame.moves = $scope.games[index].moves;  
   $scope.selectedGame.index = index;

   }

   $scope.updateGame = function (index){
    $scope.games[ $scope.selectedGame.index] = $scope.selectedGame;

   }




  });
