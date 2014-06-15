var module = angular.module('peopleTracker.directives', []);

module.directive('map', function () {
                 
                 return {
                 
                 restrict: 'E',
                 replace: true,
                 scope: {marker: '='},
                 template: '<div style="height:100%"></div>',
                 link: function (scope, element, attrs) {
                 
                 markersMap = {};
                 
                 var myOptions = {
                 zoom: 6,
                 center: new google.maps.LatLng(46.87916, -3.32910),
                 mapTypeId: google.maps.MapTypeId.ROADMAP
                 };
                 
                 var map = new google.maps.Map(document.getElementById(attrs.id), myOptions);
                 
                 scope.$watch('marker', function (newMarker, oldMarker) {
                              
                              markersMap[newMarker.id].setPosition(
                                                                   new google.maps.LatLng(newMarker.lat, newMarker.long));
                              });
                 
                 google.maps.event.addListener(map, 'click', function (e) {
                                               
                                               scope.$apply(function () {
                                                            addMarker(1, {
                                                                      lat: e.latLng.lat(),
                                                                      lng: e.latLng.lng()
                                                                      });
                                                            
                                                            console.log(e);
                                                            });
                                               
                                               }); // end click listener
                 
                 addMarker = function (id, pos) {
                 
                 var myLatlng = new google.maps.LatLng(pos.lat, pos.lng);
                 
                 var marker = new google.maps.Marker({
                                                     position: myLatlng,
                                                     map: map,
                                                     title: "Hello World!"
                                                     });
                 
                 markersMap[id] = marker;
                 }
                 
                 clearMarkers = function() {
                 for(var i=0; i< markers.length; i++){
                 markers[i].setMap(null);
                 }
                 markers = [];
                 };
                 }
                 };
                 });











