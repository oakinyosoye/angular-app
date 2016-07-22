'use strict';

angular.module('myApp', []).controller('controller', ['$scope', controller]);

function controller($scope) {
  $scope.data = [{
    "image": "http://vignette1.wikia.nocookie.net/naruto/images/3/36/Naruto_Uzumaki.png/revision/latest/scale-to-width-down/300?cb=2016010708382",
    "name": "Naruto",
    "ability": "Rasengan"
  }, {
    "image": "http://orig13.deviantart.net/4580/f/2008/073/1/5/character_select__ken_by_udoncrew.jpg",
    "name": "Sasuke",
    "ability": "Sharingan"
  }, {
    "image": "http://vignette2.wikia.nocookie.net/streetfighter/images/8/82/Character_Select_Akuma_by_UdonCrew.jpg/revision/latest?cb=20091113012042",
    "name": "Sakura",
    "ability": "Healing"
  }, {
    "image": "http://vignette2.wikia.nocookie.net/streetfighter/images/0/03/Character_Select_Chun_Li_by_UdonCrew.jpg/revision/latest?cb=20091113143916",
    "name": "Kakashi",
    "ability": "Lightning Blade"
  },  ];
}
