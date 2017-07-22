/* ==================== Variables initial values ==================== */

var score = 0; //Initial score 
var multiplier = 1; //Initial multiplier
var bonusValue = 1; //Bonus value defines wether or not score is doubled by bonusScore function
var multiPrice = 50;

/* ==================== Game functions ==================== */

window.onload = hideButtons();

function clickButton() {
	score += multiplier*bonusValue ;
	document.getElementById("display").innerHTML = score + " candela";
	hideButtons();
	colorChange();
}

function augmenterMultiplicateur() {
	score -= multiPrice;
	multiPrice = multiPrice*2;
	multiplier++;
	document.getElementById("display").innerHTML = score + " candela";
	document.getElementById("multiply").innerHTML = "Multiplicateur : " + multiplier + " | Acheter pour " + multiPrice + " candela";
	hideButtons();
}

function autoClick() {
	score -= 500;
	document.getElementById("autoclic").style.visibility= "collapse";
	document.getElementById("boughtauto").style.visibility= "visible"; // Shows with css that autoclic is bought now.
	setInterval(function(){
		document.getElementById("sun").click();
	}, 1000);
	document.getElementById("display").innerHTML = score + " candela";
	hideButtons();
}

function bonusScore() {
	score -= 5000;
	document.getElementById("bonus").style.visibility= "collapse";
	document.getElementById("special").style.visibility= "visible"; // Additionnal visual effect for special timed events. Usable for future events.
	document.getElementById("special").innerHTML = "Fiat lux !";
	bonusValue = bonusValue*2;
	hideButtons();
	
	setTimeout(function(){
		bonusValue = bonusValue/2;
		document.getElementById("bonus").style.visibility= "visible";
		document.getElementById("special").style.visibility= "hidden";
		document.getElementById("bonus").innerHTML = "Boost : off | Lancer pour 5000 candela";			
	}, 30000);
	clearInterval();
}

function hideButtons() {
	if (score >= (multiPrice)) {
		document.getElementById("multiply").disabled = false;
	}
	else {
		document.getElementById("multiply").disabled = true;
	}
	if (score >= 500) {
		document.getElementById("autoclic").disabled = false;
	}
	else {
		document.getElementById("autoclic").disabled = true;
	}
	if (score >= 5000) {
		document.getElementById("bonus").disabled = false;
	}
	else {
		document.getElementById("bonus").disabled = true;
	}
}

/* ==================== Pure styling ==================== */

/* 	
	Original colors : gamearea hsl(195, 53%, 79%) et sun 60, 100%, 50%
	Increment : score*5
	Goal colors : gamearea 193, 53%, 95% and sun 60, 100%, 90%
*/

function colorChange() {
	if (score < 100) {
		document.getElementById("gamearea").style.backgroundColor = "black";
		document.getElementById("sun").style.backgroundColor = "hsl(60, 100%, 5%)";
	}
	else if ((score >= 100) && (score < 500)) {
		document.getElementById("gamearea").style.backgroundColor = "hsl(201, 54%, 5%)";
		document.getElementById("sun").style.backgroundColor = "hsl(60, 100%, 10%)";
	}
	else if ((score >= 500) && (score < 2500)) {
		document.getElementById("gamearea").style.backgroundColor = "hsl(199, 53%, 20%)";
		document.getElementById("sun").style.backgroundColor = "hsl(60, 100%, 15%)";
	}
	else if ((score >= 2500) && (score < 12500)) {
		document.getElementById("gamearea").style.backgroundColor = "hsl(199, 53%, 30%)";
		document.getElementById("sun").style.backgroundColor = "hsl(60, 100%, 25%)";
	}
	else if ((score >= 12500) && (score < 62500)) {
		document.getElementById("gamearea").style.backgroundColor = "hsl(198, 53%, 45%)";
		document.getElementById("sun").style.backgroundColor = "hsl(60, 100%, 35%)";
	}
	else if ((score >= 62500) && (score < 312500)) {
		document.getElementById("gamearea").style.backgroundColor = "hsl(198, 53%, 60%)";
		document.getElementById("sun").style.backgroundColor = "hsl(60, 100%, 40%)";
	}
	else if ((score >= 312500) && (score < 1562500)) {
		document.getElementById("gamearea").style.backgroundColor = "hsl(197, 53%, 75%)";
		document.getElementById("sun").style.backgroundColor = "hsl(60, 100%, 45%)";
	}
	else {		
		document.getElementById("gamearea").style.backgroundColor = "lightblue";
		document.getElementById("sun").style.backgroundColor = "yellow";
	}
}