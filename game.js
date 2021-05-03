var color = genRandomColor(6);

var squares= document.querySelectorAll(".square");
var picked = pickColor();
var rgb = document.querySelector("#rgb");
var msg = document.querySelector("#msg");
var h1 = document.querySelector("h1");
var reset= document.querySelector("#reset");

reset.addEventListener("click", function() {
	color = genRandomColor(6);
	picked = pickColor();
	rgb.textContent = picked;
	for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = color[i];
	}
	h1.style.backgroundColor = "#232323"
})

rgb.textContent = picked;

for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = color[i]; 
	squares[i].addEventListener("click", function() {
		var clicked = this.style.backgroundColor;
		if (clicked==picked) {
			msg.textContent="Correct!!";
			reset.textContent = "Play Again?"
			changeColors(clicked);
			h1.style.backgroundColor = clicked;
		}
		else {
			this.style.backgroundColor = "#232323";
		}
	});
} 


function changeColors(color) {
	for (var i = 0; i < squares.length; i++) {
	 squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * color.length);
	return color[random];
}

function genRandomColor(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";	
}

