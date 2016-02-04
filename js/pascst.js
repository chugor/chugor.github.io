math = Math;

var win = 0;
var lose = 0;

$(document).ready(function() {
    $("#paBtn").click(function() {
        $("#userImage").attr("src", "../img/pascst-pa.jpg");
        check();
    });

    $("#scBtn").click(function() {
        $("#userImage").attr("src", "../img/pascst-sc.jpg");
        check();
    });

    $("#stBtn").click(function() {
        $("#userImage").attr("src", "../img/pascst-st.jpg");
        check();
    });
})

function check() {
    var cpuOption = 0;

    cpuOption = math.floor(math.random() * 3 + 1);
    if (cpuOption == 1) {
        $("#cpuImage").attr("src", "../img/pascst-pa.jpg");
    } else if (cpuOption == 2) {
        $("#cpuImage").attr("src", "../img/pascst-sc.jpg");
    } else {
        $("#cpuImage").attr("src", "../img/pascst-st.jpg");
    }

    if ($("#userImage").attr("src") == $("#cpuImage").attr("src")) {
        pass();
    } else if (($("#userImage").attr("src") == "../img/pascst-pa.jpg") && (cpuOption == 3)) {
        win += 1;
    } else if (($("#userImage").attr("src") == "../img/pascst-sc.jpg") && (cpuOption == 1)) {
        win += 1;
    } else if (($("#userImage").attr("src") == "../img/pascst-st.jpg") && (cpuOption == 2)) {
        win += 1;
    } else {
        lose += 1;
    }
    document.getElementById("scoreBoard").innerHTML = win + "--VS--" + lose;
}

function pass() {
    return NaN;
}
