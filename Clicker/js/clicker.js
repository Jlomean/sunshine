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
	if (score >= 50) {	
		multiplier++;
		score -= 50;
		document.getElementById("display").innerHTML = "Chaleur : " + score + " ° K";
		document.getElementById("multiply").innerHTML = "Multiplicateur : " + multiplier +" | Acheter (prix : 50 ° K)";
	}
	else {
		document.getElementById("multiply").innerHTML = " Vous n'avez pas assez de fonds !";
	}
}