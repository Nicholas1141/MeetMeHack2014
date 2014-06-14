/**
 * Created by yemi-t on 14/06/2014.
 */

app.controller('EventListController', function($scope){
   //TODO: hard coded events, fetch from service
    $scope.events  = [
        {
            name: "Event 1"
        },
        {
            name: "Event 2"
        }


    ];
});