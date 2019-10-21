/*************************
 *  FriendFinder server app by Brad Ham
 * October, 2019
 * 
 * Made with Node.js
 * ***********************/

// Dependencies
// =============================================================
var express = require("express");
var path = require("path");  // Do we need? It's in routes.

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

//routes
require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on http://localhost:" + PORT);
});
