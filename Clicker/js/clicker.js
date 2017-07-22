h = document.getElementById("display");
console.log(h);

b = document.getElementById("sun");
console.log(b);

var score = 0;
var multiplier = 1;

function clickButton() {
	score += multiplier ;
	document.getElementById("display").innerHTML = "Chaleur : " + score + " ° K";
}

function augmenterMultiplicateur() {
	if (score >= (10*multiplier)) {
		score -= (10*multiplier);	
		multiplier++;
		document.getElementById("display").innerHTML = "Chaleur : " + score + " ° K";
		document.getElementById("multiply").innerHTML = "Multiplicateur : " + multiplier + " | Acheter pour " + 10*multiplier + " ° K";
	}
	else {
		document.getElementById("multiply").innerHTML = "  Il fait trop froid !  ";
		setInterval(function(){
			document.getElementById("multiply").innerHTML = "Multiplicateur : " + multiplier + " | Acheter pour " + 10*multiplier + " ° K";
		}, 3000);		
	}
}

function autoClick() {
	if (score >= 500) {
		score -= 500;
		document.getElementById("autoclic").disabled = true;
		document.getElementById("autoclic").innerHTML = "Autoclic : on";
		setInterval(function(){
			document.getElementById("sun").click();
		}, 1000);
		document.getElementById("display").innerHTML = "Chaleur : " + score + " ° K";
	}
	else {
		document.getElementById("autoclic").innerHTML = "  Il fait trop froid !  ";
		setInterval(function(){
			document.getElementById("autoclic").innerHTML = "autoclic : off | Acheter pour 500 ° K";
		}, 3000);
	}
}