// All Statistics
let carrots = 0;
let carrotsPerSecond = 0;
let carrotsPerClick = 1;

// Main function to start + per click increase + goal
function increment() {
    carrots += carrotsPerClick;
	document.getElementById("showCarrots").innerText = carrots;
	if (carrots >= 999999) { // num can be changed to increase/decrease  goal
		document.getElementById("gameOver").innerText = "Congrats!!! You beat the score"
	}
}