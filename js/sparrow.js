const RAINBOW = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
const BEFORE_TEXT = 'touch';
const AFTER_TEXT = 'unrelenting gay';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function rainbows(event) {
  if($(this).text() == AFTER_TEXT) {
    return;
  }
  var colors = event.data.colors;
  $(this).text(AFTER_TEXT);
  for(var i = 0; i < colors.length; i++) {
    $('#sparrowG').attr('fill', colors[i]);
    await sleep(1000);
    console.log(colors[i]);
  }
  $('#sparrowG').attr('fill', 'black');
  $(this).text(BEFORE_TEXT);
}

$(document).ready(function() {
  $.get("img/off.svg", function(data) {
    var div = document.getElementById('sparrow');
    div.innerHTML = new XMLSerializer().serializeToString(data.documentElement);
    $('#sparrow').append(`<p id="sparrow-text">${BEFORE_TEXT}</p>`);
    $('#sparrow-text').click({colors: RAINBOW}, rainbows)
  });
});  