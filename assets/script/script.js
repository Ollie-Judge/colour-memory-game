var colours = ["pink", "yellow", "lightblue", "brown"]

var pattern = [];

chosenPattern = [];

$('.btn').click(function() {

    var selectedColour = $(this).attr("id")

    chosenPattern.push(selectedColour);

});

function ensuingPattern() {

    var randomNumber = Math.floor(Math.random() * 4);

    var randomColour = colours[randomNumber];

    pattern.push(randomColour);

    $('#' + randomColour).fadeIn(150).fadeOut(150).fadeIn(150);
    
}
