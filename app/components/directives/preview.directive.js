(function() {
    'use strict';

angular
    .module('project')
    .directive('preview', preview)


function preview() {
    return { 
      restrict: 'EA',
      replace: false,
      scope: {
        category: "=category",
      },
      link: function (scope, elem, attrs) {

        var container = document.querySelector('.portfolio__gallery__item');

        var prev = document.createElement('div');
        prev.className = 'preview';
        prev.innerHTML = scope.category;

        elem.append(prev);
        elem.on('mouseover', function() {          
          prev.style.display = 'block';
        });
        elem.on('mouseout', function() {          
          prev.style.display = 'none';
        })


      }
    }
}



})();
