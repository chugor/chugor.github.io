$(document).ready(function () {
	$(".whatP").hide();
	$(".eg1Ans").hide();
	$(".eg2Ans").hide();
	$(".eg3Ans").hide();

	$(".whatBtn").click(function () {
		$(this).hide();
		$(".whatP").show(1000);
	});

	$(".eg1").click(function () {
		$(this).hide();
		$(".eg1Ans").show(500);
	});

	$(".eg2").click(function () {
		$(this).hide();
		$(".eg2Ans").show(500);
	});

	$(".eg3").click(function () {
		$(this).hide();
		$(".eg3Ans").show(500);
	});

	$("#nextBtn").click(function () {
		window.location.assign("../pages/english-intran.html");
	});

})