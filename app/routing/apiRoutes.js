//var path = require("path");

var testFrietnds = {
    "f1": "Elaine",
    "f2": "Seinfeld"
}

module.exports = function(app){

// Displays tables api
app.get("/api/friends", function(req, res) {
    return res.json(testFrietnds);
  });

};
