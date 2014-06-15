var mongo = require('mongodb');

var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;

var server = new Server('localhost', 27017, { auto_reconnect: true });

db = new Db('HackDb', server);

db.open(function (err, db) {

    if (!err) {
        console.log("Connected to 'HackDb' database");
        db.collection('groupevents', { strict: true }, function (err, collection) {
            if (err) {
                console.log("The 'groupevents' collection doesn't exist. Creating it with sample data...");
                populateDB();
            }
        });
    }
});

exports.findById = function (req, res) {
    var id = req.params.id;
    console.log('Retrieving event: ' + id);
    db.collection('groupevents', function (err, collection) {
        collection.findOne({ '_id': new BSON.ObjectID(id) }, function (err, item) {
            res.send(item);
        });
    });
};

exports.findAll = function (req, res) {

    db.collection('groupevents', function (err, collection) {
        collection.find().toArray(function (err, items) {
            res.send(items);
        });
    });
};

exports.post = function (req, res) {
    var wine = req.body;
    console.log('Adding event: ' + JSON.stringify(wine));
    db.collection('groupevents', function (err, collection) {
        collection.insert(wine, { safe: true }, function (err, result) {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                console.log('Success: ' + JSON.stringify(result[0]));
                res.send(result[0]);
            }
        });
    });
}

exports.put = function (req, res) {
    var id = req.params.id;
    var item = req.body;
    console.log('Updating event: ' + id);
    console.log(JSON.stringify(wine));
    db.collection('groupevents', function (err, collection) {
        collection.update({ '_id': new BSON.ObjectID(id) }, item, { safe: true }, function (err, result) {
            if (err) {
                console.log('Error updating wine: ' + err);
                res.send({ 'error': 'An error has occurred' });
            } else {
                console.log('' + result + ' document(s) updated');
                res.send(wine);
            }
        });
    });
}

exports.delete = function (req, res) {
    var id = req.params.id;
    console.log('Deleting event: ' + id);
    db.collection('groupevents', function (err, collection) {
        collection.remove({ '_id': new BSON.ObjectID(id) }, { safe: true }, function (err, result) {
            if (err) {
                res.send({ 'error': 'An error has occurred - ' + err });
            } else {
                console.log('' + result + ' document(s) deleted');
                res.send(req.body);
            }
        });
    });
}

exports.drop = function (req, res) {
 
    console.log('drop database');
    db.dropDatabase();
}

/*--------------------------------------------------------------------------------------------------------------------*/
// Populate database with sample data -- Only used once: the first time the application is started.
// You'd typically not find this code in a real-life app, since the database would already exist.
var populateDB = function () {

    var items = [
    {
        "attendees": [
          [
              { "id": 1 },
              { "trackLocation": true },
              { "checkedin": false },
              { "name": "Angel Hack" }
          ],
         [
          { "id": 2 },
          { "trackLocation": true },
          { "checkedin": false },
          { "name": "Ninja Hack" }
         ]
        ],
        "name": "Angel Hack",
        "note": "this is my description",
        "eventend": "14 June 2014",
        "status": "active",
        "longitude": 64.079526,
        "latitude": -13.862221,
        "address": "Google Campus, London"
    },
    {
        "attendees": [
          [
              { "id": 1 },
              { "trackLocation": true },
              { "checkedin": true },
              { "name": "Brazil" }
          ],
          [
              { "id": 2 },
              { "trackLocation": true },
              { "checkedin": true },
              { "name": "Croatia" }
          ]
        ],
        "name": "World Cup - Brazil vs Croatia",
        "note": "We love World Cup",
        "eventend": "12 June 2014",
        "status": "active",
        "longitude": 64.079526,
        "latitude": -13.862221,
        "address": "Google Campus, London"
    },
    {
        "attendees": [
          [
              { "id": 1 },
              { "trackLocation": true },
              { "checkedin": true },
              { "name": "Brazil" }
          ],
          [
              { "id": 2 },
              { "trackLocation": true },
              { "checkedin": true },
              { "name": "Croatia" }
          ]
        ],
        "name": "World Cup - France vs Brazil",
        "note": "We love World Cup",
        "eventend": "12 June 2014",
        "status": "active",
        "longitude": 64.079526,
        "latitude": -13.862221,
        "address": "Google Campus, London"
    },
    {
        "attendees": [
          [
              { "id": 1 },
              { "trackLocation": true },
              { "checkedin": true },
              { "name": "Brazil" }
          ],
          [
              { "id": 2 },
              { "trackLocation": true },
              { "checkedin": true },
              { "name": "Croatia" }
          ]
        ],
        "name": "World Cup - Brazil vs UK",
        "note": "We love World Cup",
        "eventend": "12 June 2014",
        "status": "active",
        "longitude": 64.079526,
        "latitude": -13.862221,
        "address": "Google Campus, London"
    }
    ];

    db.collection('groupevents', function (err, collection) {
        collection.insert(items, { safe: true }, function (err, result) { });
    });

};
