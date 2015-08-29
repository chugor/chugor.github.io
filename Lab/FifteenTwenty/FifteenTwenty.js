var win = 0;
var lose = 0;
var whoTurn = ""

var cpuLeft = 0;
var cpuRight = 0;
var cpuTotal = 0;
var cpuAsk = 0;

var userTotal = 0;
var userAsk = 0;

$(document).ready(function() {
    if (Math.floor(Math.random() * 2 + 1) == 1) {
        whoTurn = "user"
        document.getElementById("turnTable").innerHTML = "User Turn"
    } else {
        whoTurn = "cpu"
        document.getElementById("turnTable").innerHTML = "CPU Turn"
        $(".rdBtn").attr('disabled', true);
    }
    /**
     * Change Hand
     * @param  {NaN}
     * @return {NaN}
     */
    $(".userHands").click(function() {
        if ($(this).attr("src") == "../../images/pascst/st.jpg") {
            $(this).attr("src", "../../images/pascst/pa.jpg");
        } else {
            $(this).attr("src", "../../images/pascst/st.jpg");
        };
    })

    $("#submitBtn").click(function() {
        $("#cpuLeftHand").attr("src", "../../images/pascst/st.jpg");
        $("#cpuRightHand").attr("src", "../../images/pascst/st.jpg");
        if (whoTurn == "user") {
            cpuTotal = 0;
            userTotal = 0;
            cpuLeft = Math.floor(Math.random() * 2 + 1);
            cpuRight = Math.floor(Math.random() * 2 + 1);

            if (cpuLeft == 2) {
                console.log('');
                cpuTotal += 5;
                $("#cpuLeftHand").attr("src", "../../images/pascst/pa.jpg");
            };
            if (cpuRight == 2) {
                console.log('');
                cpuTotal += 5;
                $("#cpuRightHand").attr("src", "../../images/pascst/pa.jpg");
            };

            if ($("#userLeftHand").attr("src") == "../../images/pascst/pa.jpg") {
                userTotal += 5;
            };
            if ($("#userRightHand").attr("src") == "../../images/pascst/pa.jpg") {
                userTotal += 5;
            };
            if ($("#zero").is(':checked')) {
                userAsk = 0;
            };
            if ($("#five").is(':checked')) {
                userAsk = 5;
            };
            if ($("#ten").is(':checked')) {
                userAsk = 10;
            };
            if ($("#fifteen").is(':checked')) {
                userAsk = 15;
            };
            if ($("#twenty").is(':checked')) {
                userAsk = 20;
            };
            $("#askPara").text("User Asked: " + userAsk);

            if (userAsk == (userTotal + cpuTotal)) {
                console.log("");
                win += 1;
                lose = 0;
                whoTurn = "user";
                $("#turnTable").text("User Turn")
            } else {
                console.log("");
                win = 0;
                lose = 0;
                whoTurn = "cpu";
                $("#turnTable").text("CPU Turn");
                $(".rdBtn").attr("disabled", true);
            };
        } else {
            var ran = 0;
            ran = Math.floor(Math.random() * 14 + 1);
            var cpuAsk = 0;
            userTotal = 0;
            cpuTotal = 0;

            if (ran == 1) {
                cpuAsk = 0;
            } else if ((ran > 1) && (ran < 6)) {
                cpuAsk = 5;
            } else if ((ran > 5) && (ran < 10)) {
                cpuAsk = 10;
            } else if ((ran > 9) && (ran < 14)) {
                cpuAsk = 15;
            } else {
                cpuAsk = 20;
            };
            $("#askPara").text("CPU Asked: " + cpuAsk);

            if (cpuAsk == 0) {
                cpuTotal = 0;
                console.log("");
                $("#cpuLeftHand").attr("src", "../../images/pascst/st.jpg");
                $("#cpuRightHand").attr("src", "../../images/pascst/st.jpg");
            } else if (cpuAsk == 5) {
                ran = Math.floor(Math.random() * 2 + 1);
                if (ran == 1) {
                    console.log("");
                    cpuTotal = 0;
                    $("#cpuLeftHand").attr("src", "../../images/pascst/st.jpg");
                    $("#cpuRightHand").attr("src", "../../images/pascst/st.jpg");
                } else {
                    console.log("");
                    cpuTotal = 5;
                    $("#cpuLeftHand").attr("src", "../../images/pascst/pa.jpg");
                    $("#cpuRightHand").attr("src", "../../images/pascst/st.jpg");
                };
            } else if (cpuAsk == 10) {
                ran = Math.floor(Math.random() * 3 + 1);

                if (ran == 1) {
                    console.log("");
                    cpuTotal = 0;
                    $("#cpuLeftHand").attr("src", "../../images/pascst/st.jpg");
                    $("#cpuRightHand").attr("src", "../../images/pascst/st.jpg");
                } else if (ran == 2) {
                    console.log("");
                    cpuTotal = 5;
                    $("#cpuLeftHand").attr("src", "../../images/pascst/pa.jpg");
                    $("#cpuRightHand").attr("src", "../../images/pascst/st.jpg");
                } else {
                    console.log("");
                    cpuTotal = 10;
                    $("#cpuLeftHand").attr("src", "../../images/pascst/pa.jpg");
                    $("#cpuRightHand").attr("src", "../../images/pascst/pa.jpg");
                };
            } else if (cpuAsk == 15) {
                ran = Math.floor(Math.random() * 2 + 1);
                if (ran == 1) {
                    console.log("");
                    cpuTotal = 5;
                    $("#cpuLeftHand").attr("src", "../../images/pascst/pa.jpg");
                    $("#cpuRightHand").attr("src", "../../images/pascst/st.jpg");
                } else {
                    console.log("");
                    cpuTotal = 10;
                    $("#cpuLeftHand").attr("src", "../../images/pascst/pa.jpg");
                    $("#cpuRightHand").attr("src", "../../images/pascst/pa.jpg");
                };
            } else {
                console.log("");
                cpuTotal = 10;
                $("#cpuLeftHand").attr("src", "../../images/pascst/pa.jpg");
                $("#cpuRightHand").attr("src", "../../images/pascst/pa.jpg");
            };

            if ($("#userLeftHand").attr("src") == "../../images/pascst/pa.jpg") {
                userTotal += 5;
            };
            if ($("#userRightHand").attr("src") == "../../images/pascst/pa.jpg") {
                userTotal += 5;
            };

            if (cpuAsk == (userTotal + cpuTotal)) {
                win = 0;
                lose += 1;
                whoTurn = "cpu";
                $("#turnTable").text("CPU Turn")
            } else {
                win = 0;
                lose = 0;
                whoTurn = "user";
                $("#turnTable").text("User Turn");
                $(".rdBtn").attr("disabled", false);
            };

        };
        if (win == 2) {
            $("#turnTable").text("You Win ! ! !");
        }
        if (lose == 2) {
            $("#turnTable").text("You Lose . . .")
        }
        console.log('----------');
        console.log("User Total: " + userTotal);
        console.log("User Ask: " + userAsk);
        console.log("CPU Total: " + cpuTotal);
        console.log("CPU Ask: " + cpuAsk);
        console.log("win: " + win);
        console.log("lose: " + lose);
    })

})
