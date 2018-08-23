'use strict';
angular.module('listaCrudApp')

    .service('ThemeService', [function () {
        var themeChoice = localStorage.getItem('themeChoice');
        this.refresh = function () {
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



    }]);