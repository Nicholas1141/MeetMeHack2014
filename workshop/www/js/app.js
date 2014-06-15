/**
 * Created by yemi-t on 14/06/2014.
 */

angular.module('peopleTracker', [
    'peopleTracker.controllers',
    'peopleTracker.directives',
    'ui.bootstrap',
    'ngTouch',
    'ngRoute',
    'ngAnimate',
    'eventsService',
    'pubnub.angular.service'])
    .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/events', {templateUrl: './partials/eventlist.html', controller: 'EventListController'});
    $routeProvider.when('/event/:eventId', {templateUrl: './partials/eventDetail.html', controller: 'MapCtrl'});
    $routeProvider.otherwise({redirectTo: '/events'});
}]);