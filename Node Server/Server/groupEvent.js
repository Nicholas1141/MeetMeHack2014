
/////////////////////////////////////////////////////////////////////////////////
// Copyright (c) Autodesk, Inc. All rights reserved 
// Written by Philippe Leefsma 2013 - ADN/Developer Technical Services
//
// Permission to use, copy, modify, and distribute this software in
// object code form for any purpose and without fee is hereby granted, 
// provided that the above copyright notice appears in all copies and 
// that both that copyright notice and the limited warranty and
// restricted rights notice below appear in all supporting 
// documentation.
//
// AUTODESK PROVIDES THIS PROGRAM "AS IS" AND WITH ALL FAULTS. 
// AUTODESK SPECIFICALLY DISCLAIMS ANY IMPLIED WARRANTY OF
// MERCHANTABILITY OR FITNESS FOR A PARTICULAR USE.  AUTODESK, INC. 
// DOES NOT WARRANT THAT THE OPERATION OF THE PROGRAM WILL BE
// UNINTERRUPTED OR ERROR FREE.
/////////////////////////////////////////////////////////////////////////////////

// Requested Modules
var fs = require('fs');
var path = require('path');
var crypto = require('crypto');
var process = require('child_process');

exports.getGroupEvents = function (callback) {

    var events =

    [{
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

    callback(events);
};

