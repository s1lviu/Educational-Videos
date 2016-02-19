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


app.controller('MainCtrl', function ($scope, $ionicPopup, $cordovaFileOpener2, $cordovaFile, $ionicPlatform) {
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
      "Ortocentrul, înălţimile triunghiului": "triunghi.mp4"
    };

  };

  $scope.addItems();


  $ionicPlatform.ready(function () {

    /*
     $scope.success = function () {
     $ionicPopup.alert({
     title: 'Succes!',
     content: 'Fisierele au fost procesate!'
     });
     };
     $scope.error = function () {
     $ionicPopup.alert({
     title: 'Ne pare rau!',
     content: 'A aparut o eroare la copierea fisierelor!'
     });
     };


     var sursa = cordova.file.applicationDirectory + "www";
     var destinatie = cordova.file.externalDataDirectory;
     console.log(sursa);
     console.log(destinatie);
     $cordovaFile.copyDir(sursa, "videos", destinatie, "videoclipuri")
     .then(function (success) {
     $scope.success();
     console.log(success);
     }, function (error) {
     $scope.error();
     console.log(error);
     });
     */

    $scope.open = function (text) {
      var file = destinatie + "videoclipuri/" + text;

      console.log(file);

      window.open(file, '_system', 'location=no');

      /*
       $cordovaFileOpener2.open(
       file,
       'video/mp4'
       ).then(function () {
       console.log("File opened succesfully!");
       }, function (err) {
       console.log("Error!" + "File " + file + " " + err.message);
       });

       */

    }

  });

});



