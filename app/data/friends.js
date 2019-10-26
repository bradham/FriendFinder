
var Friends = {

  friendsArr: [
    {
      "name": "Brad Ham",
      "photo": "https://akns-images.eonline.com/eol_images/Entire_Site/2017920/rs_600x600-171020123519-600.thor-ragnarok-4.102017.jpg?fit=around|700:700&crop=700:700;center,top&output-quality=90",
      "scores": [
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]
    }
  ],
  findFriend: function (scoreArr) {
    //code to run comparison calculations to return back most compatible friend
    console.log("Array to compare: " + scoreArr);

    //variable for evaluating score
    var totalDifference = 0;
    var topFriend = {};

            //hold the score array to add it
            var tempScoreArr = [];

    //Initilize lowestScore so that a match will always occur below 51.
    var lowestScore = 51;

    console.log("this.friend in friends.js: " + JSON.stringify(this.friendsArr[0]));
    


    //Assuming the last element in the Friends object array was the friend we're comparing
    //then we don't need to check the last element. 
    for (var i = 0; i < (this.friendsArr.length - 1); i++) {

      for (var j = 0; j < this.friendsArr[i].scores.length; j++) {


        //console.log("passed score vals: " + parseInt(scoreArr[j]));
        //console.log("current in array score vals: " + parseInt(this.friendsArr[i].scores[j]));


  
        var tempScore =  parseInt(this.friendsArr[i].scores[j]);
        tempScore -= parseInt(scoreArr[j]);

        //console.log("tempSCORE: " + tempScore);

        tempScoreArr.push(tempScore);

        //console.log("temp Score array val " + j + ": " + tempScoreArr[j]);


        //Find absolute score without neg numbers by adding up entire tempScoreArr
        for (var k = 0; k < tempScoreArr.length; k++) {
          console.log("total abs loop: " + Math.abs(tempScoreArr[k]));

          var tempAbs = Math.abs(tempScoreArr[k]);

          totalDifference += tempAbs;
          console.log("total diff loop: " + totalDifference);


        };

        console.log("total diff: " + totalDifference);

        //This will find the first compatible friend if more than 1 friend matches because
        // and equal score will not be saved as topFriend
        if (totalDifference < lowestScore) {
          console.log("total diff checked: " + totalDifference);
          topFriend = Object.assign(topFriend, this.friendsArr[i]);
        }

      }
    }

    console.log("topFriend in friends.js: " + JSON.stringify(topFriend));
    return topFriend;

  }

};

module.exports = Friends;