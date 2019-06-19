//Colors assigned
var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
];

var colorDisplay = document.getElementById("colorDisplay");
var pickedColor = colors[3];


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
        alert("correct");
    } else {
        alert("no match");
    }

    })
};

