/**
 * Created by Ilonze on 14/06/2014.
 */
angular.module('messagingService', [])
    .factory('Messaging', function(){

        var pubnub = PUBNUB.init({
            publish_key   : 'pub-c-11781c51-4d7a-48ba-857f-2a6b5184ce10',
            subscribe_key : 'sub-c-a709d546-f3cd-11e3-928e-02ee2ddab7fe'
        });

        function publish(location) {
            pubnub.publish({
                channel : "hello_world",
                message : "Hi."
            })
        }
        return{
            publishLocation:function(){
                publish();
            },
            subscribeToEvent:function(eventId){
                pubnub.subscribe({
                    channel : eventId,
                    message : function(m){ alert(m) },
                    connect : publish
                })
            }
        }
    });
