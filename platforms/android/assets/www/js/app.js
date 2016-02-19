// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'ngCordova']);

app.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});


app.controller('MainCtrl', function ($scope, $cordovaFileOpener2) {
  var currentStart = 0;
  $scope.items = [];


  $scope.addItems = function () {

    /*
     for (var i = currentStart; i < currentStart + 20; i++) {
     $scope.items.push("Item " + i);
     }

     currentStart += 20;

     $scope.items.push("Item " + i);
     */

    $scope.data = {
      "Triunghi": "triunghi.mp4"
    };

  };

  $scope.addItems();

  $scope.open = function (text) {
    //var file = "/android_asset/www/videos/" + "" + text;
    var file = '/android_asset/www/videos/triunghi.mp4';

    $cordovaFileOpener2.open(
      file,
      'video/mp4'
    ).then(function () {
      console.log("File opened succesfully!");
    }, function (err) {
      console.log("Error!" + "File " + file + " " + err.message);
    });

  }

});



