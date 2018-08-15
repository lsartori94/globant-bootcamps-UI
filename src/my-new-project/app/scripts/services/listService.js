'use strict';
angular.module('listaCrudApp')

  .service('ListService', [function () {
      var beers;
      var save= function() {localStorage.setItem('beerList', JSON.stringify(beers));};
      //poner en una function lo de abajo
      this.refresh= function(){ 
      if(JSON.parse(localStorage.getItem('beerList'))=== null){
            beers = [];
            save();
       } else {
           beers = JSON.parse(localStorage.getItem('beerList'));
       }
    };
        this.getBeers = function() {
            return beers;
        };

        this.setBeers = function(beer) {
            beers.push(beer);
            save();
        };
        //tiene que recibir un json y devolver un json sin el nuevo
        this.deleteBeer = function(index) {
            beers.splice(index,1);
            save();
        };
        this.editBeer = function(index){
            beers[index].name='xaxa';
            save();
        };
}]);