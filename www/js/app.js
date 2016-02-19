var app = angular.module('starter', ['ionic', 'ngCordova']);

app.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    if (window.cordova && window.cordova.plugins.Keyboard) {

      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });


});


app.controller('MainCtrl', function ($scope) {

    $scope.data = {
      "Ortocentrul, înălţimile triunghiului": "triunghi.mp4",
      "Ortocentrul, înălţimile triunghiului 1": "triunghi.mp4",
      "Ortocentrul, înălţimile triunghiului 2": "triunghi.mp4",
      "Ortocentrul, înălţimile triunghiului 3": "triunghi.mp4",
      "Ortocentrul, înălţimile triunghiului 4": "triunghi.mp4",
      "Ortocentrul, înălţimile triunghiului 5": "triunghi.mp4",
      "Ortocentrul, înălţimile triunghiului 6": "triunghi.mp4",
      "Ortocentrul, înălţimile triunghiului 7": "triunghi.mp4"
    };


    $scope.open = function (text) {
      var file = "/android_asset/www/videos/" + text;
      window.open(file, '_system', 'location=no');
    }

});



