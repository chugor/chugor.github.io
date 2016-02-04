$(document).ready(function() {
    $("#lightBulb").click(function() {
        if ($(this).attr("src") == "../img/Light-Bulb-Off.jpg") {
            $(this).attr("src", "../img/Light-Bulb-On.jpg")
        } else {
            $(this).attr("src", "../img/Light-Bulb-Off.jpg")
        };
    })
})
