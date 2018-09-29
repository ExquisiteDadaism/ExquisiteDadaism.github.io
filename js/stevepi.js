/* stevepi's JS file for the exquisite corpse */

$(document).ready(function() {
    console.log( "doc.ready complete" );
function fadeInOut() {
/*
  $( ".dadaBG" ).animate( "5", function() {
      // Animation complete
      console.log('eye5 fadeIn complete');
      $(".dadaBG").animate( "5", function() {
        fadeInOut();
      });
    }
  )
*/


$( ".dadaBG" ).animate({
    opacity: 1,
  }, 5000, function() {
    $( ".dadaBG" ).animate({
        opacity: 0,
      }, 5000, function() {
        fadeInOut();
  });
});


}
fadeInOut();












});
