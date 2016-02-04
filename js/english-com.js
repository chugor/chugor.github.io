$(document).ready(function () {
    $(".whatP").hide();
    $(".eg1Ans").hide();
    $(".eg2Ans").hide();
    $(".ex12").hide();
    $(".ex22").hide();
    $(".defP").hide();

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

    $(".ex1").click(function () {
        $(this).hide();
        $(".ex12").show(500);
    });

    $(".ex2").click(function () {
        $(this).hide();
        $(".ex22").show(500);
    });

    $(".defBtn").click(function () {
        $(this).hide();
        $(".defP").show(500);
    });

    $(".preBtn").click(function () {
        window.location.assign("../pages/english-intran.html");
    });

    $(".exitBtn").click(function () {
        window.location.assign("../pages/english.html");
    });

})