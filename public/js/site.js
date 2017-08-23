/*global $, geneticSubstitutionCrack*/ //globalizing jQuery
$(function () {
    "use strict";
    //toggle nav
    $(document).on("click", ".navToggle", function (e) {
        e.preventDefault();
        $("nav").toggleClass("active");
    });

    //fallback for checking required fields
    $(document).on("click", "#submit", function (e) {
        e.preventDefault();

        var errors = false;
        var error_text = "<ul class='error'>";


        $("*[required]").each(function () {
            if (!$(this).val().length > 0) {
                errors = true;
                $(this).parents("label").addClass("error");
                error_text += "<li>Please " + $(this).attr("title").toLowerCase() + "</li>";
            } else {
                $(this).parents("label").removeClass("error");
            }
        });
        error_text += "</ul>";

        if (errors) {
            //let the user know what errors there were.
            $(".message").html(error_text);
            $.scrollTo($(".message"), 500, {
                offset: -80
            });
        } else {
            //fake a success message - this is where an ajax post to an API would go.
            $(".message").html("<span class='success'>Message Sucessfully Sent!</span>");
            $.scrollTo($(".message"), 500, {
                offset: -80
            });
        }
    });

    $(document).on("blur input", "*[required]", function () {
        if (!$(this).val().length > 0) {
            $(this).parents("label").addClass("error");
        } else {
            $(this).parents("label").removeClass("error");
        }
    });
});