$(document).ready(function() {
    console.log('');
    var changeSpeed = 1000;
    var ranNum;
    var scores = 0;
    var addScore = false;
    setInterval(function() {
        ranNum = Math.floor(Math.random() * 5 + 1);
        $(".hole").attr("src", "../img/CGW-cross.png");
        console.log(ranNum);

        if (ranNum == 1) {
            $("#one").attr("src", "../img/happyBirthday-tze.png");

        };
        if (ranNum == 2) {
            $("#two").attr("src", "../img/happyBirthday-tze.png");

        };
        if (ranNum == 3) {
            $("#three").attr("src", "../img/happyBirthday-tze.png");

        };
        if (ranNum == 4) {
            $("#four").attr("src", "../img/happyBirthday-tze.png");

        };
        if (ranNum == 5) {
            $("#five").attr("src", "../img/happyBirthday-tze.png");

        };

        $(".hole").click(function() {
            if ($(this).attr("src") == "../img/happyBirthday-tze.png") {
                addScore = true;
                $(this).attr("src", "../img/CGW-cross.png");
            };
        });

        if (addScore) {
            scores += 1;
            if (changeSpeed>100) {
                  changeSpeed -= 50;
            };
            document.getElementById("scoresBoard").innerHTML = ("Scores: " + scores);
            addScore = false;
        };


    }, changeSpeed);
})
