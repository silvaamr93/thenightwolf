/*global $*/
$(document).ready(function(){
"use strict"; 
// vars
var star = $(".style");



// functions


star.fadeTo(10000,1);





$(function(){

setInterval(function (){star.fadeTo(10000,1);},3000);
setInterval(function (){star.fadeTo(10000,0.3);},8000);
});


    // scroll
    $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
    $('html,body').animate({
    scrollTop: target.offset().top
    }, 3000);
    return false;
    }
    }
    });
    });




});



