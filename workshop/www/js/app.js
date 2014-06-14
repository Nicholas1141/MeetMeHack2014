/**
 * Created by yemi-t on 14/06/2014.
 */

angular.module('peopleTracker', ['peopleTracker.controllers',
    'ui.bootstrap',
    'ngTouch',
    'ngRoute',
    'ngAnimate']).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/events', {templateUrl: './partials/eventlist.html', controller: 'EventListController'});
    $routeProvider.when('/events/:eventId', {templateUrl: './partials/eventDetail.html', controller: 'EventListController'});
    $routeProvider.otherwise({redirectTo: '/events'});
}]);