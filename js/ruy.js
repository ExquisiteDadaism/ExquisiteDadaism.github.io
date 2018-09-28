/* var specificPropertyParameters = anime({
  targets: '#specificPropertyParameters .el',
  translateX: {
    value: 250,
    duration: 800
  },
  rotate: {
    value: 360,
    duration: 1800,
    easing: 'easeInOutSine'
  },
  scale: {
    value: 2,
    duration: 1600,
    delay: 800,
    easing: 'easeInOutQuart'
  },
  delay: 250 // All properties except 'scale' inherit 250ms delay
});
*/
var lineDrawing = anime({
  targets: '.lineDrawing .lines path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 6500,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: true
});

var timelineParameters = anime.timeline({
  direction: 'alternate',
  loop: true
});

timelineParameters
  .add({
    targets: '#Hello #H-hello.st0',
    translateX: [ { value: 80 }, { value: 160 }, { value: 250 } ],
    translateY: [ { value: 30 }, { value: 60 }, { value: 60 } ],
    duration: 3000
  })
  .add({
    targets: '#Hello #E-hello.st0',
    translateX: [ { value: 80 }, { value: 160 }, { value: 250 } ],
    translateY: [ { value: 30 }, { value: -30 }, { value: -30 } ],
    duration: 3000,
    offset: 200
  })
  .add({
    targets: '#Hello #L2-hello.st0',
    translateX: [ { value: 80 }, { value: 250 } ],
    translateY: [ { value: -60 }, { value: -30 }, { value: -30 } ],
    duration: 3000,
    offset: 400
  })
  .add({
    targets: '#Hello #L1-hello.st0',
    translateX: [ { value: 80 }, { value: 160 }, { value: 250 } ],
    translateY: [ { value: 30 }, { value: -30 }, { value: -30 } ],
    duration: 3000,
    offset: 600
  })
  .add({
    targets: '#Hello #O-hello.st0',
    translateX: [ { value: 80 }, { value: 250 } ],
    translateY: [ { value: -60 }, { value: -30 }, { value: -30 } ],
    duration: 3000,
    offset: 800
  })
    .add({
      targets: '#World #W-world.st1',
      translateX: [ { value: 80 }, { value: 160 }, { value: 250 } ],
      translateY: [ { value: 30 }, { value: 60 }, { value: 60 } ],
      duration: 3000,
      offset: 1000
    })
    .add({
      targets: '#World #O-world.st1',
      translateX: [ { value: 80 }, { value: 160 }, { value: 250 } ],
      translateY: [ { value: 30 }, { value: -30 }, { value: -30 } ],
      duration: 3000,
      offset: 1200
    })
    .add({
      targets: '#World #R-world.st1',
      translateX: [ { value: 80 }, { value: 250 } ],
      translateY: [ { value: -60 }, { value: -30 }, { value: -30 } ],
      duration: 3000,
      offset: 1400
    })
    .add({
      targets: '#World #L-world.st1',
      translateX: [ { value: 80 }, { value: 160 }, { value: 250 } ],
      translateY: [ { value: 30 }, { value: -30 }, { value: -30 } ],
      duration: 3000,
      offset: 1600
    })
    .add({
      targets: '#World #D-world.st1',
      translateX: [ { value: 80 }, { value: 250 } ],
      translateY: [ { value: -60 }, { value: -30 }, { value: -30 } ],
      duration: 3000,
      offset: 1800
    });
