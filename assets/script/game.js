// All Statistics
let carrots = 0;
let carrotsPerSecond = 0;
let carrotsPerClick = 1;

//Cost of Upgrades
let bucketCost = 10;
let shovelCost = 100;
let diggerCost = 1000;

//Levels of Upgrades
let bucket = 0;
let shovel = 0;
let digger = 0;

// Main function to start + per click increase + goal
function increment() {
    carrots += carrotsPerClick;
	document.getElementById("showCarrots").innerText = carrots;
	if (carrots >= 999999) { // num can be changed to increase/decrease  goal
		document.getElementById("gameOver").innerText = "Congrats!!! You beat the score"
	}
}

// Upgrade Bucket
function buyBucket() {
    if (carrots >= bucketCost) { 	
		carrots -= bucketCost;
		document.getElementById("showCarrots").innerText = carrots;
		bucket++;
		document.getElementById("bucketNum").innerText = bucket;
		bucketCost *=2;
		document.getElementById("bucketCost").innerText = bucketCost;
		carrotsPerClick += 1;
		document.getElementById("showCarrotsPerClick").innerText = carrotsPerClick;
	} else {
		alert("You don't have enough Carrots!")
	}
}

// Upgrade Shovel
function buyShovel() {
    if (carrots >= shovelCost) { 	
        carrots -= shovelCost;
		document.getElementById("showCarrots").innerText = carrots;
		shovel++;
		document.getElementById("shovelNum").innerText = shovel;
		shovelCost *=2;
		document.getElementById("shovelCost").innerText = shovelCost;
		carrotsPerClick += 10;
		document.getElementById("showCarrotsPerClick").innerText = carrotsPerClick;
	}	else {
		alert("You don't have enough Carrots!")
	}

}

// Upgrade Digger
function buyDigger() {
    if (carrots >= diggerCost) {	
		carrots -= diggerCost;
		document.getElementById("showCarrots").innerText = carrots;
		digger++;
		document.getElementById("diggerNum").innerText = digger;
		diggerCost *=2;
		document.getElementById("diggerCost").innerText = diggerCost;
		carrotsPerClick += 100;
		document.getElementById("showCarrotsPerClick").innerText = carrotsPerClick;
	}	else {
		alert("You don't have enough Carrots!")
	}
}