//var path = require("path");
//
var friendsObj = require("../data/friends.js");
var express = require("express");

//var friendsObj = new FRIENDS();

//test data
var testFriends = [
    {
    "f1": "Elaine",
    "f2": "Seinfeld"
    }
    ];

module.exports = function (app) {

    //Express needed to translate POST request
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    // Displays friends api
    app.get("/api/friends", function (req, res) {

        //console.log("array: " + JSON.stringify(friendsObj.friendsArr));
        return res.json(friendsObj.friendsArr);
    });

    app.post("/api/friends", function (req, res) {
        
        //Push object recieved from userData from the form to the Friends Array to use later
        //console.log("array in body of request: " + req.body.scores);

        friendsObj.friendsArr.push(req.body);

        //call friendsObj.findFriend()
        //send retrun back

        var mostCompatible = friendsObj.findFriend(req.body.scores);
        return res.json(mostCompatible);
    });


};
