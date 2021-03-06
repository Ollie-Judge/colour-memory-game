var colours = ["pink", "yellow", "lightblue", "brown"];

var pattern = []; /* randomly generated pattern */

var chosenPattern = []; /* user selected pattern */

var begun = false; /* stops the game from just starting on its own */
var level = 0; /* sets the game level to 0 at the beginning and changes as the game progresses */

$(document).click(function() {
    if(!begun) {
        ensuingPattern(); /*calls the function ensuing pattern which will generate the random colour*/
        begun = true; /* begins the game once a key has been pushed */
    }
});


$(".btn").click(function() {

    var selectedColour = $(this).attr("id"); /* chooses the id attribute in the div that has been selected by the user */
    chosenPattern.push(selectedColour); /* pushes that chosen div to an empty array called "selected colour" */
    animateClick(selectedColour); /* connects up the animation in the function called "animateClick" top the click function we're in here */

    checkAnswer(chosenPattern.length-1); /* Calls the check answer function with the user chosen pattern*/

});

function checkAnswer(presentLevel) {

    if (pattern[presentLevel] === chosenPattern[presentLevel]) { /* Checks to see if the generated pattern  matches the user chosen pattern exactly */

        console.log("completed"); /* posts this in the console if the correct div has been selected by the user */

        if (chosenPattern.length === pattern.length) { /* if the users pattern matches the generated pattern then it will send the 
            game back to random generation for a new addition to the pattern */

            setTimeout(function() {
                ensuingPattern(); /* calls the main function of generating a random colour */
            }, 1000);
            level++; /* incrementally progresses the game */
            $("#gameText").text("Level " + level);
        }

    } else {

        console.log("incorrect"); /* posts this in the console if the wrong div has been selected by the user */

        $("body").addClass("endGame"); /* add the endGame class to the body */
        setTimeout(function() {
            $("body").removeClass("endGame"); /* Removes the endGame class from the body */
        }, 200);

        $("#gameText").text("Game Over, click on the reload button to restart and play again"); /* adds the game over text to the gameText id */
        startAgain(); /* Calls the startAgain function */
    }

}

function ensuingPattern() {

    chosenPattern = [];

    var randomNumber = Math.floor(Math.random() * 4); /* Generates random number between 0 and 3 */
    var randomColour = colours[randomNumber]; /* Grabs the random number from above and corresponds it to the array, 
    then picks 1 of the 4 colours in the array, producing that instead of the number */
    pattern.push(randomColour); /* pushes the random colour to the empty array called "pattern" */

    $('#' + randomColour).fadeIn(150).fadeOut(150).fadeIn(150); /* sets animation speeds for the random colour */

}

function animateClick(chosenColour) {

    $("#" + chosenColour).addClass("chosen"); /* looks at the class of the chosen div and adds the class "chosen" to it */

    setTimeout(function() {
        $("#" + chosenColour).removeClass("chosen"); /* removes the "chosen" class from the div selected by the user */
    }, 150); /* Gives the animation a speed at which it removes the class */
}

function startAgain() {

    level = 0; /* Sets the level back to 0 */
    pattern = []; /* Sets the game pattern back to default */
    begun = false; /* Sets the start locking mechanism back to false which means it wont just start on its own */

}
