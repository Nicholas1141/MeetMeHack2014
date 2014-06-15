/**
 * Created by yemi-t on 14/06/2014.
 */

angular.module('peopleTracker', [
    'peopleTracker.controllers',
    'peopleTracker.directives',
    //   'ui.bootstrap',
    'ngTouch',
    'ngRoute',
    'ngAnimate',
    'eventsService',
    'pubnub.angular.service',
    "mobile-angular-ui"])
    .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/createPerson', {templateUrl: './partials/createPerson.html', controller: 'AddPersonCtrl'});
    $routeProvider.when('/events', {templateUrl: './partials/eventlist.html', controller: 'EventListController'});
    $routeProvider.when('/event/:eventId', {templateUrl: './partials/eventDetail.html', controller: 'MapCtrl'});
    $routeProvider.when('/createEvent', {templateUrl: './partials/createEvent.html', controller: 'AddEventCtrl'});
 //   $routeProvider.when('/createPerson/:eventId', {templateUrl: './partials/createPerson.html', controller: 'AddPersonCtrl'});

    $routeProvider.otherwise({redirectTo: '/createPerson'});
}]);