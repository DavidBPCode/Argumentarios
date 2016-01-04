/*
Author:			David Bernabé Palanco
Date:				28/09/2015
Modify:
Modify by:
Department:    Organizations & Quality
Company:       Helvetia Seguros
Object:			Contact Center dialgs
Version:       0.1.1509
*/

$(function(){

    setInterval("mostrar()",10000);

});
var mostrar = function(){

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

};
