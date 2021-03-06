'use strict';

angular.module('myApp', []).controller('controller', ['$scope', controller]);

function controller($scope) {
  $scope.data = [{
    "image": "http://vignette1.wikia.nocookie.net/naruto/images/3/36/Naruto_Uzumaki.png/revision/latest/scale-to-width-down/300?cb=2016010708382",
    "name": "Naruto",
    "ability": "Rasengan"
  }, {
    "image": "http://vignette2.wikia.nocookie.net/naruto/images/7/7f/Sasuke_1.png/revision/latest/scale-to-width-down/300?cb=20151220061752",
    "name": "Sasuke",
    "ability": "Sharingan"
  }, {
    "image": "http://vignette2.wikia.nocookie.net/naruto/images/e/ec/Sakura_Boruto_Movie.png/revision/latest/scale-to-width-down/300?cb=20151230020317",
    "name": "Sakura",
    "ability": "Healing"
  }, {
    "image": "http://i.imgur.com/Mt1AZJ1.png",
    "name": "Kakashi",
    "ability": "Lightning Blade"
  },  ];
}
