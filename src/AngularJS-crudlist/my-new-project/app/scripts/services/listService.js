'use strict';
angular.module('listaCrudApp')

    .service('ListService', [function () {
        var themeChoice = localStorage.getItem('themeChoice');
        this.refreshTheme = function () {
            if (localStorage.getItem('themeChoice') === null) {
                themeChoice = 'original';
                localStorage.setItem('themeChoice', 'original');
            } else {
                themeChoice = localStorage.getItem('themeChoice');
            }
        };
        this.getTheme = function () {
            return themeChoice;
        };
        this.setTheme = function (theme) {
            themeChoice = theme;
            localStorage.setItem('themeChoice', theme);
        };


      
        var beers;
        
        
        this.save = function () { localStorage.setItem('beerList', JSON.stringify(beers)); };

        this.refresh = function () {
            if (JSON.parse(localStorage.getItem('beerList')) === null) {
                beers = [];
                this.save();
            } else {
                beers = JSON.parse(localStorage.getItem('beerList'));
            }
        };
        this.getBeers = function () {
            return beers;
        };

        this.setBeers = function (beer) {
            beers.push(beer);
            this.save();
        };
        
        //tiene que recibir un json y devolver un json sin el nuevo
        this.deleteBeer = function (index) {
            console.log(index);
            beers.splice(index, 1);
          
            this.save();
        };
        this.editBeer = function (index, beerdata) {
            console.log(beerdata);
            console.log(index);
            beers[index].name = beerdata[0];
            beers[index].brand = beerdata[1];
            beers[index].price = beerdata[2];
            beers[index].notes = beerdata[3];
            this.save();
        };
        
    }]);