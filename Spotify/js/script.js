$(document).ready(function(){

    $('.nyil').click(function(){ //kivalasztjuk a gombot
        $('html, body').animate({scrollTop:$('.nyil').offset().top},1000); //a html body kell, odamegy a section plan tetejere, az offset kell, az 1000 meg a sebesseg
    });

    $('.hover').click(function(){
        $('.toggle').toggle();
    });

    $('.mobile-navicon').click(function(){
        var nav=$('.main-nav')
        nav.slideToggle(200);
    })



})