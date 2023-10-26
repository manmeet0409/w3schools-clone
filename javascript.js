// Original colors
const originalColor = '#282a35'; 
const newColor = '#0d1721';
const white = '#fff';
const dNavbar= '#1d2a35';
const dCodeP='#38444d';
const black = '#000';

// Select button
const btn = $('.dark-mode');

// Click handler
btn.on('click', function() {

  // Toggle color class on body
  $('body').toggleClass('color-changed');

  // Update colors based on class
  if($('body').hasClass('color-changed')) {
    updateColors(newColor, dNavbar, dCodeP, white); 
  } else {
    updateColors(originalColor,white, '#e7e9eb', black);
  }

});

// Update all elements with new color
function updateColors(color, NavCol,codPColor, text) {

  $('.container-1, .nav2, .javascript-sec, .container-3 .learn-major-lang button').css('background-color', color);

  $('.wave path').attr('fill', color);
  $('.nav').css('background-color', NavCol);
  $('.ex').css('background-color',codPColor);
  $('.ex h3').css('color',text);
  $('.nav').css('color', text);
}
