var gallonsToLiters = function(gallons) {
	return gallons * 3.78541
}

var gallons = parseFloat(prompt("Enter number of gallons to convert to liters:"))

alert(gallonsToLiters(gallons))
