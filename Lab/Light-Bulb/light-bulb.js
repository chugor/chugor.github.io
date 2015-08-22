$(document).ready(function () {
	$("#lightBulb").click(function () {
		if ($(this).attr("src") == "../../images/Light-Bulb/Light-Bulb-Off.jpg") {
			$(this).attr("src", "../../images/Light-Bulb/Light-Bulb-On.jpg")
		}else{
			$(this).attr("src", "../../images/Light-Bulb/Light-Bulb-Off.jpg")	
		};
	})
})