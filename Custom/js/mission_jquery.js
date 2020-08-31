$(".footerButton").click(function () {
    /* $(".connect").css({
         "visibility": "visible"

     });*/
    $(".connect").slideToggle();
});

$(".isHeadButton").click(function () {

    $(".connect").slideToggle();
});

/*pipeline button slide*/

$(".pipe1").click(function () {

    $(".project_planning_list_ul").slideToggle();
    $(".drafting_list_ul").slideUp();
    $(".awarding_contract_list_ul").slideUp();
    $(".issuing_rfp_list_ul").slideUp();
});


$(".pipe2").click(function () {

    $(".drafting_list_ul").slideToggle();
    $(".project_planning_list_ul").slideUp();
    $(".awarding_contract_list_ul").slideUp();
    $(".issuing_rfp_list_ul").slideUp();
});


$(".pipe3").click(function () {

    $(".issuing_rfp_list_ul").slideToggle();
    $(".project_planning_list_ul").slideUp();
    $(".drafting_list_ul").slideUp();
    $(".awarding_contract_list_ul").slideUp();
});


$(".pipe4").click(function () {

    $(".awarding_contract_list_ul").slideToggle();
    $(".project_planning_list_ul").slideUp();
    $(".drafting_list_ul").slideUp();
    $(".issuing_rfp_list_ul").slideUp();

});

/*Tutoring process button 1 code starts */
$(".step1").click(function () {
    /* $(".btn-group , .step1Side").animate({
         "width": "100%",
         "transition": ".3s ease"
     });*/

    $(".sideNote1").fadeToggle(100);
    $(".step1Detail").fadeToggle(500);
    $(".ttl1").toggle(500);


});

var on1 = true;

$(".step1").click(function () {

    console.log(on1);
    if (on1) {
        on1 = false;
        $(".tutoring_process_buttonGroup1").css({
            "width": "100%",
            "transition": ".3s ease"
        });
        $(".step1").css({
            "width": "30%",
            "transition": ".3s ease"
        });
        $(".step1Side").css({
            "width": "100%",
            "transition": ".3s ease"
        });
    } else {
        on1 = true;
        $(".tutoring_process_buttonGroup1").css({
            "width": "70%",
            "transition": ".3s ease"
        });
        $(".step1").css({
            "width": "100%",
            "transition": ".3s ease"
        });
        $(".step1Side").css({
            "width": "40%",
            "transition": ".3s ease"
        });
    }
    return false;

});
/*Tutoring process button 1 code ends */


/*Tutoring process button 2 code starts */
$(".step2").click(function () {
    /* $(".btn-group , .step1Side").animate({
         "width": "100%",
         "transition": ".3s ease"
     });*/

    $(".sideNote2").fadeToggle(100);
    $(".step2Detail").fadeToggle(500);
    $(".ttl2").toggle(500);


});

var on2 = true;

$(".step2").click(function () {

    console.log(on2);
    if (on2) {
        on2 = false;
        $(".tutoring_process_buttonGroup2").css({
            "width": "100%",
            "transition": ".3s ease"
        });
        $(".step2").css({
            "width": "30%",
            "transition": ".3s ease"
        });
        $(".step2Side").css({
            "width": "100%",
            "transition": ".3s ease"
        });
    } else {
        on2 = true;
        $(".tutoring_process_buttonGroup2").css({
            "width": "70%",
            "transition": ".3s ease"
        });
        $(".step2").css({
            "width": "100%",
            "transition": ".3s ease"
        });
        $(".step2Side").css({
            "width": "40%",
            "transition": ".3s ease"
        });
    }
    return false;

});
/*Tutoring process button 2 code ends */

/*Tutoring process button 3 code starts */
$(".step3").click(function () {
    /* $(".btn-group , .step1Side").animate({
         "width": "100%",
         "transition": ".3s ease"
     });*/

    $(".sideNote3").fadeToggle(100);
    $(".step3Detail").fadeToggle(500);
    $(".ttl3").toggle(500);


});

var on3 = true;

$(".step3").click(function () {

    console.log(on3);
    if (on3) {
        on3 = false;
        $(".tutoring_process_buttonGroup3").css({
            "width": "100%",
            "transition": ".3s ease"
        });
        $(".step3").css({
            "width": "30%",
            "transition": ".3s ease"
        });
        $(".step3Side").css({
            "width": "100%",
            "transition": ".3s ease"
        });
    } else {
        on3 = true;
        $(".tutoring_process_buttonGroup3").css({
            "width": "70%",
            "transition": ".3s ease"
        });
        $(".step3").css({
            "width": "100%",
            "transition": ".3s ease"
        });
        $(".step3Side").css({
            "width": "40%",
            "transition": ".3s ease"
        });
    }
    return false;

});
/*Tutoring process button 3 code ends */

/*Tutoring process button 1 code starts */
$(".step4").click(function () {
    /* $(".btn-group , .step1Side").animate({
         "width": "100%",
         "transition": ".3s ease"
     });*/

    $(".sideNote4").fadeToggle(100);
    $(".step4Detail").fadeToggle(500);
    $(".ttl4").toggle(500);


});

var on4 = true;

$(".step4").click(function () {

    console.log(on4);
    if (on4) {
        on4 = false;
        $(".tutoring_process_buttonGroup4").css({
            "width": "100%",
            "transition": ".3s ease"
        });
        $(".step4").css({
            "width": "30%",
            "transition": ".3s ease"
        });
        $(".step4Side").css({
            "width": "100%",
            "transition": ".3s ease"
        });
    } else {
        on4 = true;
        $(".tutoring_process_buttonGroup4").css({
            "width": "70%",
            "transition": ".3s ease"
        });
        $(".step4").css({
            "width": "100%",
            "transition": ".3s ease"
        });
        $(".step4Side").css({
            "width": "40%",
            "transition": ".3s ease"
        });
    }
    return false;

});

$(".mlist").css({
    "list-style-type": "disc"
});
/*Tutoring process button 4 code ends */

/*Navbar*/

/*function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navbar-nav") {
        x.className += " responsive";
    } else {
        x.className = "navbar-nav";
    }
}

/*$(".icon ").click(function () {
    

$(".navbar-nav li:not(:first-child)").slideToggle();
$(".navbar-nav li:not(:last-child)").slideToggle();



});*/
