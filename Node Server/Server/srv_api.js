

var express = require('express');
var groupEvent = require('./groupEvent');

var app = express();

app.get('/', function (req, res) {
    res.type('text/plain'); // set content-type
    res.send('i am a beautiful butterfly'); // send text response
});

app.get('/nodehack/api/v1/groupEvents', function (req, res) {

    groupEvent.getGroupEvents(
        function (events) {

            res.writeHead(200, { 'Content-Type': 'application/json' });

            res.end(JSON.stringify(events));

            /*res.write('[');

            //var events = ["a", "b", "c"];

            for (var i = 0; i < events.length; i++)
            {
                res.write(JSON.stringify(events[i]));
                
                if (i !== events.length - 1)
                    res.write(',');
            }

            res.end(']');*/

        });
});

app.listen(process.env.PORT || 3000);
