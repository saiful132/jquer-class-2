function effect1() {
	var jsEffect = document.querySelector(".a").getAttribute("href");
	document.querySelector(".p1").innerHTML = jsEffect;
}

function effect2() {
	var jsEffect2 = $(".a").attr("href");
	$(".p2").text(jsEffect2);
}
