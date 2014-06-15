var express = require('express'),
    api = require('./api');

var app = express();

app.configure(function () {
    app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser());
});

var prefix = "/nodehack/api/v1";

app.get(prefix + '/groupevents', api.findAll);
app.get(prefix + '/groupevent/:id', api.findById);
app.post(prefix + '/groupevent', api.post);
app.put(prefix + '/groupevent/:id', api.put);
app.delete(prefix + '/groupevent/:id', api.delete);
app.delete(prefix + '/drop', api.drop);

app.listen(3000);
console.log('Listening on port 3000...');
