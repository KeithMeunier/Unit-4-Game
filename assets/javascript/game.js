// GLOBAL VARIABLES - accessible to all functions in the JS file
// ------------------------------------------

/* The following are the crystal object (variables) which is broken down into sub-objects (sub-variables) (the individual crystal types)
which have been set with the initilal value of 0 */

var crystal = {
    diamond:
    {
        name: "diamond",
        value: 0
    },
    gem:
    {
        name: "gem",
        value: 0
    },
    ruby:
    {
        name: "ruby",
        value: 0
    },
    sapphire:
    {
        name: "sapphire",
        value: 0
    },
};

// The following variables will be used to track the scores
// We need to track the current and target scores:

var currentScore = 0;
var targetScore = 0;

// The following variables will be used to track the wins and losses:

var winCount = 0;
var lossCount = 0;








// FUNCTIONS
// ------------------------------------------

/* 

The following getRandom variable will generate random numbers for the borwser to use against the player.
We have given the function a minimum number and maximum number parameter

To generate a random decimal number (between 0 and 1, exclusive of 1), 
we are using Math.random(). 
Then we multiple the result by at least 1 ensuring a result
that is between our minimum and maximum parameters, 
then passing the value to Math.floor() function to round the 
value down to the nearest whole number.

*/

var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}

// The following startGame variable has been created to start or restarts the game
// This variable will be called upon below, when the user has won or lost a game.
// When called, it will:
// currentScore = 0;   This will restart the score to 0 again  
// targetScore = getRandom(19, 120); This will reset a new target score with a minimum number of 19 and a maximum number of 120
// The minumim number and maximum number parameters were set above in the getRandom object/variable
// When this variable is called, the function will also create random values between 1 and 12 (using the getRandom variable above) and
// assign a new random value for each crystal
// Finally, jQuery will look for related ids in the HTML and update the HTML using    .html()   to reflect the new new current and new target scores

var startGame = function() {

// Reset the current score

currentScore = 0;

// Set a new Target Score (between 19 and 120)
// The minimum and maximum parameters were set in the getRandom object/variable above

targetScore = getRandom(19, 120);

// Set different values for each of the crystals (between 1 and 12)

crystal.diamond.value = getRandom(1, 12);
crystal.gem.value = getRandom(1, 12);
crystal.ruby.value = getRandom(1, 12);
crystal.sapphire.value = getRandom(1, 12);

// Change the HTML elements to reflect the result of JQ computations

//   Using .hmtl()  
// - this will state/manipulate the HTML code involved in element(s)
// - corresponds with the html of the element


$("#userScore").html(currentScore);
$("#targetScore").html(targetScore);

// Testing Console

console.log("---------------")
console.log("Target Score:  " + targetScore);
console.log("Diamond: " + crystal.diamond.value + " | Gem: " + crystal.gem.value + " | Ruby: " + crystal.ruby.value + " | Sapphire: " + crystal.sapphire.value);
console.log("---------------")
}

/* 
Update the current score change in value in response 
to each specific crystal being clicked.
Since we set up the values of each crystal in the global variables,
we can get the value associated with each of the crystals and 
pass it through the function.
*/

var addValues = function(crystal) {

    // Updates current score - it will add new value per crystal to the current score/tally

    currentScore = currentScore + crystal.value;

    // Change HTML to reflect current score

    $("#userScore").html(currentScore);

    // Call the checkWIn function

    checkWin();

    // Testing Console

    console.log("Your Score:  " + currentScore);

}

    // Check if the user won or lost and reset game
    // The checkWin variable's function will go through 2 conditions:

    // 1.
    // if the current score is greater than the randomly generated target score, then the user is alerted that they lost.
    // it will add this to the loss counter
    // it will update the HTML element to reflect the new loss count
    // it will the restart the game by calling the startGame variable's function created above
    
    // 2.
    // otherwise, if the current score is equal to the randomly generated target score, then the user is alerted that they won.
    // it will add this to the win counter
    // it will update the HTML element to reflect the new win count
    // it will the restart the game by calling the startGame variable's function created above

    var checkWin = function() {

        if(currentScore > targetScore) {
            alert("Sorry, You Lost!");
            console.log("User Lost.");

            // Add to Loss Counter

            lossCount++;
        
            // Change Loss Count HTML
            
            $("#lossCount").html(lossCount);

            // Restart Game

            startGame();
          }

        else if(currentScore == targetScore) {
            alert("Congratulations! You Won!");
            console.log("User Won.");

            // Add to Win Counter

            winCount++;
        
            // Change Win Count HTML
            
            $("#winCount").html(winCount);

            // Restart Game

            startGame();
          }
    }








    // MAIN PROCESSES - Where Functions will be called
//  -----------------------------------------

// The following instruction will start the game for the first time

startGame();

/* The following instructions says that each time the HTML element
with the matching ID is clicked upon, it will perform the function
within the related curly brackets.

When the jQuery assigned HTML element is clicked, it will add run the function associated with the 
above variable addValues (created above) for the clicked on HTML element.
*/

$("#diamond").click(function() {
    addValues(crystal.diamond);
});

$("#sapphire").click(function() {
    addValues(crystal.sapphire);
});

$("#gem").click(function() {
    addValues(crystal.gem);
});

$("#ruby").click(function() {
    addValues(crystal.ruby);
});

