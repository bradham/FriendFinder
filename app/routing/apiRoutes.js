//var path = require("path");
//
var friendsObj = require("../data/friends.js");

//var friendsObj = new FRIENDS();

//test data
var testFriends = [
    {
    "f1": "Elaine",
    "f2": "Seinfeld"
    }
    ];

module.exports = function (app) {

    // Displays friends api
    app.get("/api/friends", function (req, res) {

        console.log("array: " + friendsObj.friendsArr);
        return res.json(friendsObj.friendsArr);
    });

    app.post("/api/friends", function (req, res) {
        
        //TODO
        //to push object recieved from userData from the form
        
        //call friendsObj.findFriend()
        //send retrun back

        var mostCompatible = friendsObj.findFriend();
        return res.json(mostCompatible);
    });


};
