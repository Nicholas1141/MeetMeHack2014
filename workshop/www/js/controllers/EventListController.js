/**
 * Created by yemi-t on 14/06/2014.
 */

angular.module('peopleTracker.controllers', [])
    .controller('EventListController',['$scope', '$rootScope', '$window',
        '$location', 'Events','PubNub', function ($scope, $rootScope, $window, $location,Events,PubNub) {
            $scope.slide = '';
            $rootScope.back = function() {
                $scope.slide = 'slide-right';
                $window.history.back();
            }
            $rootScope.go = function(path){
                console.log(path);
                $scope.slide = 'slide-left';
                $location.url(path);
            }

            $scope.timeFrame = "Today";

            $scope.changeTimeFrame = function(newTimeFrame)
            {
                $scope.timeFrame = newTimeFrame;
            };

            PubNub.init({
                publish_key   : 'pub-c-11781c51-4d7a-48ba-857f-2a6b5184ce10',
                subscribe_key : 'sub-c-a709d546-f3cd-11e3-928e-02ee2ddab7fe'
            });

            var publish = function() {
                navigator.geolocation.watchPosition(geolocationSuccess, geolocationError, { frequency: 1000 } );
            };
            var geolocationSuccess = function(position){
                testscope($rootScope, position);

            }

            var testscope = function($rootScope, position)
            {
                PubNub.ngPublish({
                    channel: $scope.selectedEvent ,
                    message: {
                        "subscriber" : $scope.userName,
                        "latitude": position.coords.latitude,
                        "longitude": position.coords.longitude
                    }
                });
            }

            $scope.subscribe = function(eventName) {
                PubNub.ngSubscribe({ channel: eventName});

                $rootScope.$on(PubNub.ngMsgEv(eventName), function (event, payload) {
                    console.log(payload.message.subscriber + " : " +  payload.message.latitude + " : " + payload.message.longitude);
                });

                $scope.selectedEvent = eventName;
                publish();
                //  setInterval( $scope.publish(), 2000);
            }



            var geolocationError = function(error){
                console.log(error);
            }


            Events.get()
                .success(function(data){
                    $scope.events =data;
                })
        }])
    .controller('MapCtrl',['$scope','$routeParams','PubNub','$rootScope', function($scope,$routeParams, PubNub,$rootScope) {

        $scope.eventId = $routeParams.eventId;

        PubNub.ngSubscribe({ channel: $routeParams.eventId, message: function() {

            $scope.$on(PubNub.ngMsgEv($routeParams.eventId), function (event, payload) {
                console.log($routeParams.eventId );
                $scope.$apply(function () {
                    $scope.marker = {
                        id: payload.message.subscriber,
                        lat: payload.message.latitude,
                        long: payload.message.longitude };
                    publish();
                });
            });
        }});

        var publish = function() {
            navigator.geolocation.watchPosition(geolocationSuccess, geolocationError, { frequency: 1000 });
        };

        var geolocationSuccess = function(position){

            testscope($rootScope, position);
        }

        var testscope = function($rootScope, position)
        {
            PubNub.ngPublish({
                channel: $routeParams.eventId ,
                message: {
                    "subscriber" : $scope.userName,
                    "latitude": position.coords.latitude,
                    "longitude": position.coords.longitude
                }
            });
        }
        var geolocationError = function(error){
            console.log(error);
        }
    }])
    .controller('AddPersonCtrl', ['$scope','$rootScope','PubNub','$location', function($scope, $rootScope,PubNub, $location) {

        $scope.userName = "";
        $scope.password = "";

        var go = function(){
            $scope.slide = 'slide-left';
            $location.url('/events');
        }


        $scope.addPerson = function(newUserName){
            $rootScope.userName = newUserName;
            go();

        }
    }]) //AddPersonCtrl
    .controller('AddEventCtrl', ['$scope','$rootScope', 'PubNub','$location', 'Events',
        function($scope, $rootScope, PubNub, $location, Events) {
        
        $scope.eventName = "";
        $scope.note = "";
        $scope.address = "";

        var go = function(){
            $scope.slide = 'slide-left';
            $location.url('/events');
        }

        $scope.addEvent = function(){
            
            Events.post({name: $scope.eventName, address: $scope.address, note: $scope.note})
            
            go();

        }
        
        
    }]); //AddEventCtrl
