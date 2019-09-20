(function() {
    'use strict';

angular
    .module('project')
    .directive('countTo', countTo)

    countTo.$inject = ['$interval'];

function countTo($interval) {
    return {
      templateUrl: 'app/templates/count.html', 
      restrict: 'EA',
      replace: true,
      scope: {
        limit: "=limit",
        achievement: "=achievement",
        desc: "=desc"
      },
      link: function (scope, elem, attrs) {

        scope.start = 0;
        var once = true;

        document.addEventListener('scroll', function () {

            var now = Date.now();
            var last, diff;
            var screenHeigth = document.documentElement.clientHeight,
                anchorPos = elem[0].getBoundingClientRect().top;

            if (anchorPos - screenHeigth < 0 && once) {

              var timerId = $interval(function() {
                last = Date.now();
                diff = last - now;
  
                scope.start++
                once = false;
  
                if (diff > 3000) {
                  $interval.cancel(timerId);
                  scope.start = scope.limit;
                }
              },3000/scope.limit);            
            }

        })
      }
    }
}



})();
