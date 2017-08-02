var numberSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	//mode buttons event listener
	setUpModeButtons();

	//square listeners
	setUpSquares();

	reset();
}

function setUpModeButtons(){
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
	
			this.textContent === "Easy" ? numberSquares = 3: numberSquares = 6;
			//if(this.textContent === "Easy"){
			//numberSquares = 3;
			//lse {
			//numberSquares = 6;
			//
			reset();
		});
	}
}

function setUpSquares(){
	for(var i = 0; i < squares.length; i++){	
		//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor; 
			//compare color to pickedColor
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor; 
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again!";
			}
		});
	}
}

function reset(){
	//generate all new colors
	colors = generateRandomColors(numberSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;

	messageDisplay.textContent = ""; 
	resetButton.textContent = "New Colors";
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
		
	}
	h1.style.backgroundColor = "steelblue"; 
}

//Button.addEventListener("click", function(){
//hardButton.classList.remove("selected");
//easyButton.classList.add("selected");
//numberSquares = 3;
//colors = generateRandomColors(numberSquares);
//pickedColor = pickColor();
//colorDisplay.textContent = pickedColor;

//for (var i = 0; i < squares.length; i++) {
//	if(colors[i]){
//		squares[i].style.backgroundColor = colors[i];
//	} else {
//		squares[i].style.display = "none";
//	}
//}
//

//Button.addEventListener("click", function(){
//hardButton.classList.add("selected");
//easyButton.classList.remove("selected");
//numberSquares = 6;
//colors = generateRandomColors(numberSquares);
//pickedColor = pickColor();
//colorDisplay.textContent = pickedColor;
//
//for (var i = 0; i < squares.length; i++) {
//		squares[i].style.backgroundColor = colors[i];
//		squares[i].style.display = "block";
//}
//

resetButton.addEventListener("click", function(){
	reset();
});

//for(var i = 0; i < squares.length; i++){
//	//add initial colors to squares
//	squares[i].style.backgroundColor = colors[i];
//
//	//add click listeners to squares
//	squares[i].addEventListener("click", function(){
//		//grab color of clicked square
//		var clickedColor = this.style.backgroundColor; 
//		//compare color to pickedColor
//		if(clickedColor === pickedColor){
//			messageDisplay.textContent = "Correct!";
//			resetButton.textContent = "Play Again?";
//			changeColors(clickedColor);
//			h1.style.backgroundColor = clickedColor; 
//		} else {
//			this.style.backgroundColor = "#232323";
//			messageDisplay.textContent = "Try Again!";
//		}
//	});
//}

function changeColors(color){
	//loop through all sqaures
	for(var i = 0; i < squares.length; i++){
	//change each color to match given color
	squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = []
	//add num random colors to array
	for(var i = 0; i < num ; i++){
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0-
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0-255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0-255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}