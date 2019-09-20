(function() {
    'use strict';

angular
    .module('project')
    .directive('aboutTeam', aboutTeam)

function aboutTeam() {
    return {
      templateUrl: 'app/templates/about.html', 
      restrict: 'EA',
      replace: true,
      scope: {},
      controller: function($scope) {
        $scope.members = [{name:'Kenny',photo:'assets/img/kenny.jpg',position:'Graphic Designer',description:'Eum cu tantas legere complectitur, hinc utamur ea eam. Eum patrioque mnesarchum eu.'},
                          {name:'Cail',photo:'assets/img/cail.jpg',position:'Graphic Designer',description:'Eum cu tantas legere complectitur, hinc utamur ea eam. Eum patrioque mnesarchum eu.'},
                          {name:'Cartman',photo:'assets/img/cartman.jpg',position:'Graphic Designer',description:'Eum cu tantas legere complectitur, hinc utamur ea eam. Eum patrioque mnesarchum eu.'},
                          {name:'Stan',photo:'assets/img/stan.jpg',position:'Graphic Designer',description:'Eum cu tantas legere complectitur, hinc utamur ea eam. Eum patrioque mnesarchum eu.'}]
      },
      link: function (scope, elem, attrs) {

        var container = document.querySelector('.members');

        var len = scope.members.length;

        for(var i = 0; i < len; i++) {

          var figure = document.createElement('figure'),
              img = document.createElement('img'),
              figCap = document.createElement('figcaption'),
              position = document.createElement('span'),
              desc = document.createElement('p'),
              descContainer = document.createElement('div'),
              socials = document.createElement('div');

          var socialLink = ['fb','tw','gl','dl'];

          img.setAttribute('src', scope.members[i].photo);

          figCap.innerHTML = scope.members[i].name;
          position.innerHTML = scope.members[i].position;
          desc.innerHTML = scope.members[i].description;

          figCap.className = "members__name";
          descContainer.className = "members__descr";
          position.className = "members__position";
          desc.className = "members__description";
          socials.className = "socials";

          for(var j = 0; j < socialLink.length; j++) {
            var social = document.createElement('a');
            social.setAttribute('href', '#');
            social.className = 'social social__' + socialLink[j];
            socials.appendChild(social);
          }

          descContainer.appendChild(figCap);
          descContainer.appendChild(position);
          figure.appendChild(img);
          figure.appendChild(descContainer);
          figure.appendChild(desc);
          figure.appendChild(socials);
          container.appendChild(figure);
        }

      }
    }
}



})();
