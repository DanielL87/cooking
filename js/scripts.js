var gallonsToLiters = function(gallons) {
	return gallons * 3.78541
}
var ounceToPounds = function (ounce) {
	return ounce * 0.0625
}

$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var gallons = $("#gallons").val();
    var result = gallonsToLiters(gallons);
    $("#output").text(result);

	});
});

$(document).ready(function() {
	$("form#formTwo").submit(function(event) {
		event.preventDefault();
		var ounce = $("#ounce").val();
		var result = ounceToPounds(ounce);
		$("#output2").text(result);
	});
});
