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

    $ionicPlatform.registerBackButtonAction(function () {
      ionic.Platform.exitApp();
    }, 100);
  });

});


app.controller('MainCtrl', function ($scope, $ionicModal, $ionicPlatform) {


  $scope.data = {
    "01 Cercul, definitie": "01.mp4",
    "02 Cercul, Elemente": "02.mp4",
    "03 Cercul, Elemente si congruente": "03.mp4",
    "04 Cercul, Pozitia unei drepte fata de un cerc": "04.mp4",
    "05 Cercul, pozitia relativa a doua cercuri": "05.mp4",
    "06 Cercul, Unghi inscris in cerc": "06.mp4",
    "07 Cercul, Lungimea cercului": "07.mp4",
    "08 Cercul, Aria cercului": "08.mp4",
    "09 Cerc circumscris": "09.mp4",
    "10 Cercul inscris": "10.mp4",
    "11 Construirea cercului circumscris unui triunghi": "11.mp4",
    "12 Construirea cercului inscris intr-un triunghi": "12.mp4",
    "13 Tangente exterioare la cerc": "13.mp4",
    "14 Tangente intrerioare comune la doua cercuri": "14.mp4",
    "15 Tangente exterioare comune la doua cercuri": "15.mp4"


  };


  ionic.Platform.ready(function () {

    $ionicPlatform.onHardwareBackButton(function () {
      $scope.closeModal();
    });


    $scope.gofull = function () {
      var elem = document.getElementById("videoclip");
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
      }
    };

    $scope.showModal = function (templateUrl) {
      $ionicModal.fromTemplateUrl(templateUrl, {
        scope: $scope
      }).then(function (modal) {
        $scope.modal = modal;
        $scope.modal.show();
        $scope.gofull();
      });
    };

    $scope.closeModal = function () {
      $scope.modal.hide();
      $scope.modal.remove();
      screen.unlockOrientation();
    };

    $scope.playVideo = function (text) {
      screen.lockOrientation('landscape');
      $scope.showModal('modal-video.html');
      file = "/android_asset/www/videos/" + text;
      $scope.clipSrc = file;
    }

  });

});



