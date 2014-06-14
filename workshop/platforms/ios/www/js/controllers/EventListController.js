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
            name: "Event 1"
        },
        {
            name: "Event 2"
        }


    ];
}]);