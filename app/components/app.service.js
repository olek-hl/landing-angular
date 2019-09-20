(function() {
    'use strict';

angular
    .module('project')
    .factory('portfolioFactory', portfolioFactory)
    .factory('newsFactory', newsFactory)
    .factory('saveData', saveData);

function portfolioFactory($http) {

	return $http.get('../../data/portfolio.json')
         .success(function(data) {
           return data;
         })
         .error(function(err) {
           return err;
         });
}

function newsFactory($http) {

  return $http.get('../../data/news.json')
         .success(function(data) {
           return data;
         })
         .error(function(err) {
           return err;
         });
}

function saveData($cookies) {
      return {
            newCookie: function(name, email) {
              $cookies.put(name, email);
              var allCookies = $cookies.get(name);
              console.log(allCookies);
              return allCookies;
            }
      }
}

})();
