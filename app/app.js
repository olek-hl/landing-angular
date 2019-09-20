(function() {
    'use strict';

angular
    .module('project', ['smoothScroll','ngRoute','ngCookies'])

    .config(function ($routeProvider) {

            $routeProvider
                .when('/', {
                     templateUrl: 'app/views/main.html',
                     controller: 'appController'
                })
                .when('/:id', {
                     templateUrl: 'app/views/news.html',
                     controller: 'appController'
                })
                .otherwise({
                	redirectTo: '/'
            	})
        })

})();