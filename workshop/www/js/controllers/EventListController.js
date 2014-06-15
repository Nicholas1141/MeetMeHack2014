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

        $scope.publish = function() {
            PubNub.ngPublish({
                channel: "hello",
                message: {
                    "subscriber" : "subscriberA",
                    "latitude": 64.546456456,
                    "longitude": -133.3535345
                }
            });
        };
        $scope.subscribe = function() {
            PubNub.ngSubscribe({ channel: "hello" })
            $rootScope.$on(PubNub.ngMsgEv("hello"), function (event, payload) {
                alert( payload.message);
            })
            $rootScope.$on(PubNub.ngPrsEv("hello"), function (event, payload) {
                // payload contains message, channel, env...
                alert( PubNub.ngListPresence("hello") + "presence one");
            })
        }

         Events.get()
                .success(function(data){
                    $scope.events =data;
                })
}])
    .controller('MapCtrl', function ($scope) {
        $scope.mapPin = 'No pin set yet';
    });
