/*
Author:			   David Bernabé Palanco
Date:				   13/08/2015
Modify:        28/09/2015
Modify by:     David Bernabé Palanco
Department:    Organizations & Quality
Company:       Helvetia Seguros
Object:		 	   Contact Center dialgs
Version:       0.3.1509
*/

var main = function() {

  $('.submenu-one').click(function(){

    var menuBasico = $('.submenu-basicas');
    var menuSiniestros = $('.submenu-siniestros');
    var menuVarios = $('.submenu-varios');

    if(menuBasico.css("visibility") == "hidden"){
      menuBasico.css("visibility", "visible");
      menuBasico.css("position", "relative");

      menuSiniestros.css("visibility", "hidden");
      menuSiniestros.css("position", "absolute");

      menuVarios.css("visibility", "hidden");
      menuVarios.css("position", "absolute");
    }else{
      menuBasico.css("visibility", "hidden");
      menuBasico.css("position", "absolute");

      menuSiniestros.css("visibility", "hidden");
      menuSiniestros.css("position", "absolute");

      menuVarios.css("visibility", "hidden");
      menuVarios.css("position", "absolute");
    }

  });

  $('.submenu-two').click(function(){

    var menuBasico = $('.submenu-basicas');
    var menuSiniestros = $('.submenu-siniestros');
    var menuVarios = $('.submenu-varios');

    if(menuSiniestros.css("visibility") == "hidden"){
      menuSiniestros.css("visibility", "visible");
      menuSiniestros.css("position", "relative");

      menuBasico.css("visibility", "hidden");
      menuBasico.css("position", "absolute");

      menuVarios.css("visibility", "hidden");
      menuVarios.css("position", "absolute");
    }else{
      menuSiniestros.css("visibility", "hidden");
      menuSiniestros.css("position", "absolute");

      menuBasico.css("visibility", "hidden");
      menuBasico.css("position", "absolute");

      menuVarios.css("visibility", "hidden");
      menuVarios.css("position", "absolute");
    }

  });

  $('.submenu-three').click(function(){

    var menuBasico = $('.submenu-basicas');
    var menuSiniestros = $('.submenu-siniestros');
    var menuVarios = $('.submenu-varios');

    if(menuVarios.css("visibility") == "hidden"){
      menuVarios.css("visibility", "visible");
      menuVarios.css("position", "relative");

      menuBasico.css("visibility", "hidden");
      menuBasico.css("position", "absolute");

      menuSiniestros.css("visibility", "hidden");
      menuSiniestros.css("position", "absolute");
    }else{
      menuVarios.css("visibility", "hidden");
      menuVarios.css("position", "absolute");

      menuBasico.css("visibility", "hidden");
      menuBasico.css("position", "absolute");

      menuSiniestros.css("visibility", "hidden");
      menuSiniestros.css("position", "absolute");
    }

  });

  $('.arrow-next').click(function() {
    var currentSlide = $('.active-slide');
    var nextSlide = currentSlide.next();

    var currentDot = $('.active-dot');
    var nextDot = currentDot.next();

    if(nextSlide.length === 0) {
      nextSlide = $('.slide').first();
      nextDot = $('.dot').first();
    }

    currentSlide.fadeOut(800).removeClass('active-slide');
    nextSlide.fadeIn(800).addClass('active-slide');

    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');
  });

  $('.arrow-prev').click(function() {
    var currentSlide = $('.active-slide');
    var prevSlide = currentSlide.prev();

    var currentDot = $('.active-dot');
    var prevDot = currentDot.prev();

    if(prevSlide.length === 0) {
      prevSlide = $('.slide').last();
      prevDot = $('.dot').last();
    }

    currentSlide.fadeOut(800).removeClass('active-slide');
    prevSlide.fadeIn(800).addClass('active-slide');

    currentDot.removeClass('active-dot');
    prevDot.addClass('active-dot');
  });

}

$(document).ready(main);
