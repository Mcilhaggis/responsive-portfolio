
$(document).ready(function(){
    //Text fade in
    $('.hi').animate({'opacity':'1'},1500);
    $('.intro-section').animate({'opacity':'1'},3000);
    $(".navbar-brand").css({"position":"relative","opacity": 0, "right":"+=100"});
    $(".navbar-brand").animate({right:0, opacity:1},2000);
    $(".nav-link").css({"position":"relative","opacity": 0, "left":"+=100"});
    $(".nav-link").animate({left:0, opacity:1},2000);
    
});

