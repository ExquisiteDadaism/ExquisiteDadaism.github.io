const RAINBOW = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
const BEFORE_TEXT = 'touch';
const AFTER_TEXT = 'unrelenting gay';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function rainbows(event) {
  if($('#sparrow-text').text() == AFTER_TEXT) {
    return;
  }
  var colors = event.data.colors;
  $('#sparrow-text').text(AFTER_TEXT);
  for(var i = 0; i < colors.length; i++) {
    $('#sparrowG').attr('fill', colors[i]);
    await sleep(1000);
    console.log(colors[i]);
  }
  $('#sparrowG').attr('fill', 'black');
  $('#sparrow-text').text(BEFORE_TEXT);
}

$(document).ready(function() {
  $.get("img/off.svg", function(data) {
    $('#sparrow').html(new XMLSerializer().serializeToString(data.documentElement));
    $('#sparrow').append(`<p id="sparrow-text">${BEFORE_TEXT}</p>`);
    $('#sparrow').click({colors: RAINBOW}, rainbows)
  });
});  