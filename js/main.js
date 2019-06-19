//Colors assigned
var colors = generateRandomColors(6);

var colorDisplay = document.getElementById("colorDisplay");
var pickedColor = pickColor();
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function(){
    console.log("clicked!")
    // generate all new colors
    colors = generateRandomColors(6);
    // pick new random number
    pickedColor = pickColor();
    // change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    // change colors of squares
    for (var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "#232323";
})


//Assigning picked colour to title
colorDisplay.textContent = pickedColor;


//Selecting squares
var squares = document.querySelectorAll(".square");
//Assigning colours to squares
for (var i = 0; i < squares.length; i++) {
    //adds initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    
    //adds click listeners to squares
    squares[i].addEventListener('click', function(){
    //grab color of clicked square 
    var clickedColor = this.style.backgroundColor;
    //compare color to pickedColor
    if(clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct";
        resetButton.textContent = "Play Again?"
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
    } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
    }
});
};

function changeColors (color) {
    //loop through all squares
    for (var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    } 
    //change each color to match given color

}

function pickColor() {
    //randomly chooses new color from colors array
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
} 

function generateRandomColors (num) {
    // make an array
    var arr = []
    // repeat num times
    for (var i = 0; i < num; i++) {
        // get random color and push into array
        arr.push(randomColor());
        
    }
    //return that array
    return arr;
}

function randomColor () {
    // pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    // pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256);
    // pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}