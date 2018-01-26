//initialization of accessors
var textBox = document.getElementById("tempBox");
var radioC = document.getElementById("cBut");
var radioF = document.getElementById("fBut");
var subBut = document.getElementById("subBut");
var resBut = document.getElementById("resBut");
var displayBox = document.querySelector(".display"); 
var results = document.querySelector(".results");
radioF.tabIndex = "1";
radioC.tabIndex = "1";
subBut.tabIndex = "2";
resBut.tabIndex = "3";

var convertFToC = function(fahr) {
	return ((fahr-32)*(5/9));
}
var convertCToF = function(cel) {
	return ((cel*(9/5))+32);
}

var tempVal = function () {
	return parseInt(textBox.value);
}

var newValue = 0;
//if cBut selected then 
subBut.onclick = function() {
	if (radioC.checked) {
		newValue = convertCToF(tempVal());
		results.innerHTML = Math.floor(newValue) + "°F";
		if (newValue > 85) {
			displayBox.style.backgroundColor="orange";
		}
		if (newValue <= 32) {
			displayBox.style.backgroundColor="lightblue";
		}

	}
	if (radioF.checked) {
		newValue = convertFToC(tempVal());
		results.innerHTML = Math.floor(newValue) + "°C";

		if (newValue >= 30) {
			displayBox.style.backgroundColor="orange";
		}
		if (newValue <= 0) {
			displayBox.style.backgroundColor="lightblue";
		}

}

resBut.onclick = function () {
	displayBox.style.backgroundColor="white";
	results.innerHTML = "0°"; 
}

};

