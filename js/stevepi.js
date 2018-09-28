/* stevepi's JS file for the exquisite corpse */

$(document).ready(function() {
    console.log( "doc.ready complete" );
function fadeInOut() {
  $( "#eye5" ).fadeIn( "slow", function() {
      // Animation complete
      console.log('eye5 fadeIn complete');
      $("#eye5").fadeOut( "slow", function() {
        fadeInOut();
        moveEye5();
      });
    }
  )}

function moveEye5() {
  $("#eye5").animate({
    left:"+=50px",
  }, 1000);
}

fadeInOut();

});
