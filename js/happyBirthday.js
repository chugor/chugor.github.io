$(document).ready(function () {
	setInterval(function () {
		if ($("#hbBanner").attr('color') == 'red'){
			$("#hbBanner").attr("color", "orange");
		}else if ($("#hbBanner").attr('color') == 'orange') {
			$("#hbBanner").attr("color", "yellow");
		}else if ($("#hbBanner").attr('color') == 'yellow') {
			$("#hbBanner").attr("color", "green");
		}else if ($("#hbBanner").attr('color') == 'green') {
			$("#hbBanner").attr("color", "blue");
		}else if ($("#hbBanner").attr('color') == 'blue') {
			$("#hbBanner").attr("color", "purple");
		}else {
			$("#hbBanner").attr("color", "red");
		};
	}, 500);

	$("#startBtn").click(function () {
		window.location.assign("../pages/happyBirthday-game.html");
	})
})