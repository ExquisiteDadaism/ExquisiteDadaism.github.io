/* stevepi's JS file for the exquisite corpse */

$(document).ready(function() {
    console.log( "doc.ready complete" );
function fadeInOut() {
  $( "#dadaBG" ).removeClass( "dadaBG5" ).addClass( "dadaBG1" );
  $("#dadaBG").animate({
      opacity: 1,
    }, 5000, function() {
      $("#dadaBG").animate({
          opacity: 0,
        }, 5000, function() {
          $( "#dadaBG" ).removeClass( "dadaBG1" ).addClass( "dadaBG2" );
          $("#dadaBG").animate({
              opacity: 1,
            }, 5000, function() {
              $("#dadaBG").animate({
                  opacity: 0,
                }, 5000, function() {
                  $( "#dadaBG" ).removeClass( "dadaBG2" ).addClass( "dadaBG3" );
                  $("#dadaBG").animate({
                      opacity: 1,
                    }, 5000, function() {
                      $("#dadaBG").animate({
                          opacity: 0,
                        }, 5000, function() {
                          $( "#dadaBG" ).removeClass( "dadaBG3" ).addClass( "dadaBG4" );
                          $("#dadaBG").animate({
                              opacity: 1,
                            }, 5000, function() {
                              $("#dadaBG").animate({
                                  opacity: 0,
                                }, 5000, function() {
                                  $( "#dadaBG" ).removeClass( "dadaBG4" ).addClass( "dadaBG5" );
                                  $("#dadaBG").animate({
                                      opacity: 1,
                                    }, 5000, function() {
                                      $("#dadaBG").animate({
                                          opacity: 0,
                                        }, 5000, function() {
                                          fadeInOut();
                                        });
                                      });
                                    });
                                  });
                                });
                              });
                            });
                          });
                          });
                          });
}
fadeInOut();
});
