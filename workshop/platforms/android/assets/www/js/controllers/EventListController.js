/**
 * Created by yemi-t on 14/06/2014.
 */

angular.module('peopleTracker.controllers', [])
    .controller('EventListController',['$scope', '$rootScope', '$window', '$location', function ($scope, $rootScope, $window, $location) {
        $scope.slide = '';
        $rootScope.back = function() {
            $scope.slide = 'slide-right';
            $window.history.back();
        }
        $rootScope.go = function(path){
            $scope.slide = 'slide-left';
            $location.url(path);
        }
   //TODO: hard coded events, fetch from service

    $scope.showDetail = function(eventId)
    {

    };
    $scope.events  = [
        {
            name: "World Cup",
            Address: "10 Downing Street",
            Notes: "this is an awesome event",
            Location: "2222"
        },
        {
            name: "Glastonbury",
            Address: "Somewhere cool",
            Notes: "this is a festival",
            Location: "2222"
        }
    ];
}]);