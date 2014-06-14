/**
 * Created by yemi-t on 14/06/2014.
 */

angular.module('peopleTracker.controllers', [])
    .controller('EventListController',['$scope', '$rootScope', '$window',
                                       '$location', 'Events','Messaging', function ($scope, $rootScope, $window, $location,Events,Messaging) {
        $scope.slide = '';
        $rootScope.back = function() {
            $scope.slide = 'slide-right';
            $window.history.back();
        }
        $rootScope.go = function(path){
            $scope.slide = 'slide-left';
            $location.url(path);
        }

      //  Messaging.publish("MyEvent");

        $rootScope.subscribeToEvent = function (){
            Messaging.subscribeToEvent("MyEvent");
        };

         Events.get()
                .success(function(data){
                    $scope.events =data;
                })
}]);