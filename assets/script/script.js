var colours = ["pink", "yellow", "lightblue", "brown"]

var pattern = [];

function ensuingPattern() {
    var randomNumber = Math.floor(Math.random() * 4);

    var randomColour = colours[randomNumber];

    pattern.push(randomColour);

}
