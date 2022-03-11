function effect1() {
	var jsEffect = document.querySelector(".a").getAttribute("href");
	document.querySelector(".p1").innerHTML = jsEffect;
}

function effect2() {
	var jqueryEffect = $(".a").attr("href");
	$(".p2").text(jqueryEffect);
}

function effect3() {
	var jsEffect3 = $(".a1").removeAttr("href");
	$(".p3").text(jsEffect3);
}

function effect4() {
	document.querySelector(".a2").setAttribute("href", "http://www.facebook.com");
}

function effect5() {
	$(".a2").attr("href", "http://www.facebook.com");
}
