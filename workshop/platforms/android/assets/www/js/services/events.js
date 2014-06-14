/**
 * Created by Ilonze on 14/06/2014.
 */
angular.module('eventsService', [])
    .factory('Events', function($http){
        return{
            get:function(){
                return $http.get('http://23.23.212.64:3000/nodehack/api/v1/groupevents');
            }
        }
    });
