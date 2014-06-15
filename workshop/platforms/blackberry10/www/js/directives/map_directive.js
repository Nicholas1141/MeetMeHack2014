var module = angular.module('peopleTracker.directives', []);

module.directive('map', function () {

    return {

        restrict: 'E',
        replace: true,
        scope: {marker: '='},
        template: '<div style="height:100%"></div>',
        link: function (scope, element, attrs) {

            markersMap = {};

            var map;

            navigator.geolocation.watchPosition(
                function(position){

                    var myOptions = {
                        center: new google.maps.LatLng(
                            position.coords.latitude, position.coords.longitude),
                        mapTypeId: google.maps.MapTypeId.ROADMAP,
                        zoom: 15
                    };

                    map = new google.maps.Map(document.getElementById(attrs.id), myOptions);

                    //addMarker("Me", position.coords.latitude, position.coords.longitude);

                },
                function(error){
                });


            scope.$watch('marker', function (newMarker, oldMarker) {

                         //newMarker.id = "Philippe";
                         
                //addMarker(newMarker.id, newMarker.lat, newMarker.long);

                //markersMap[newMarker.id].setPosition(new google.maps.LatLng(newMarker.lat, newMarker.long));


                var myLatlng = new google.maps.LatLng(newMarker.lat, newMarker.long);

                if (markersMap[newMarker.id] !== undefined) {

                    markersMap[newMarker.id].setPosition(myLatlng);
                }
                else {

                    var newMarkerLabel = new MarkerWithLabel({
                        position: myLatlng,
                        draggable: false,
                        raiseOnDrag: true,
                        map: map,
                        labelContent: newMarker.id,
                        labelClass: "labels",
                        labelAnchor: new google.maps.Point(22, 60),
                    });

                    /*var marker = new google.maps.Marker({
                     position: myLatlng,
                     map: map,
                     title: id
                     });*/

                    markersMap[newMarker.id] = newMarkerLabel;
                }

            });

            google.maps.event.addListener(map, 'click', function (e) {

                /*scope.$apply(function () {
                 addMarker("Johnny",
                 e.latLng.lat(),
                 e.latLng.lng()
                 );

                 console.log(e);
                 });*/

            }); // end click listener

            addMarker = function (id, lat, long) {

                var myLatlng = new google.maps.LatLng(lat, long);

                if (markersMap[id] != undefined) {

                    markersMap[id].setPosition(myLatlng);
                }
                else {

                    var marker = new MarkerWithLabel({
                        position: myLatlng,
                        draggable: false,
                        raiseOnDrag: true,
                        map: map,
                        labelContent: id,
                        labelClass: "labels",
                        labelAnchor: new google.maps.Point(22, 60),
                    });

                    /*var marker = new google.maps.Marker({
                     position: myLatlng,
                     map: map,
                     title: id
                     });*/

                    markersMap[id] = marker;
                }
            }

            /*clearMarkers = function() {
             for(var i=0; i< markers.length; i++){
             markers[i].setMap(null);
             }
             markers = [];
             };*/

        }
    };
});











