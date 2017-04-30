function drawTree() {
  for (var i = 5; i > 0; i--) {

    var star = '';

    for (var k = i; k > 0; k--) {
      star += ' ';
    }

    for (var j = i; j < 6; j++) {
      star += '* ';

    }
    console.log(star);
  }
}
drawTree();



