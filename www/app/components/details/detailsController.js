angular.module('ioncurrency.controllers')

  .controller('DetailsCtrl', ['$scope', '$stateParams', 'ConversionManager', '$cordovaGeolocation', '$ionicLoading', '$ionicPlatform', '$window',
    function (scope, stateParams, manager, cordovaGeolocation, ionicLoading, ionicPlatform, window) {
      var id = stateParams.conversionId;

      scope.conversion = manager.getConversionAt(id);

      ionicPlatform.ready(function () {
        ionicLoading.show({
          template: '<ion-spinner icon="bubbles"></ion-spinner><br/>Acquiring location!'
        });

        var posOptions = {
          enableHighAccuracy: true,
          timeout: 20000,
          maximumAge: 0
        };

        cordovaGeolocation.getCurrentPosition(posOptions).then(function (position) {
          var lat = position.coords.latitude;
          var long = position.coords.longitude;

          var myLatlng = new google.maps.LatLng(lat, long);

          var mapOptions = {
            center: myLatlng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };

          var request = {
            location: myLatlng,
            radius: '500',
            keyword: ['currency exchange']
          };

          var map = new google.maps.Map(document.getElementById("map"), mapOptions);


          // Create the PlaceService and send the request.
          // Handle the callback with an anonymous function.
          var service = new google.maps.places.PlacesService(map);
          service.nearbySearch(request, function(results, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
              for (var i = 0; i < results.length; i++) {
                var place = results[i];
                // If the request succeeds, draw the place location on
                // the map as a marker, and register an event to handle a
                // click on the marker.
                var marker = new google.maps.Marker({
                  map: map,
                  position: place.geometry.location
                });
              }
            }
          });

          scope.map = map;
          ionicLoading.hide();

        }, function (err) {
          ionicLoading.hide();
          console.log(err);
        });
      });

    }])
;
