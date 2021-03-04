$(document).ready(function () {
    $("#accordion .card .btn-link").click(function () {
        if ($(this).find("i.fa").hasClass("fa-chevron-down")) {
            $(this).find("i.fa").removeClass("fa-chevron-down");
            $(this).find("i.fa").addClass("fa-chevron-up");
        }
        else if ($(this).find("i.fa").hasClass("fa-chevron-up")) {
            $(this).find("i.fa").removeClass("fa-chevron-up");
            $(this).find("i.fa").addClass("fa-chevron-down");
        }

        $(this).parents(".card").siblings().find(".card-header .btn-link i.fa").removeClass("fa-chevron-up");
        $(this).parents(".card").siblings().find(".card-header .btn-link i.fa").addClass("fa-chevron-down");
    });
});