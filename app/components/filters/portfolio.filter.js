(function() {
    'use strict';

angular
    .module('project')
    .filter('categoryFilter', categoryFilter)

    function categoryFilter() {
      return function(item, category) {
        var arr = [];
        if (item) {
          for(var i = 0; i < item.length; i++) {
            if (item[i].category == category) {
              arr.push(item[i]);
            } else if (category == '') {
              arr.push(item[i]);
            }
          }
        }
        return arr
      }
    }

})();
