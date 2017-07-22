
var score = 0; //Initial score 
var multiplier = 1; //Initial multiplier
var bonusValue = 1; //Bonus value defines wether or not score is doubled by bonusScore function
var multiPrice = 50;

function clickButton() {
	score += multiplier*bonusValue ;
	document.getElementById("display").innerHTML = score + " candela";
	hideButtons();
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
	document.getElementById("boughtauto").style.visibility= "visible"; // Show with css that autoclic is bought now.
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
		document.getElementById("bonus").innerHTML = "Fiat lux : off | Acheter pour 5000 candela";			
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
