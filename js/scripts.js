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
console.log(' ');

// draw 8
for(var i = 0; i<5; i++){
    var star='';
    if((i===0)||(i===2)||(i===4)){
        for(var j=0; j<5;j++){
            star += ' *';}
    } else {
        for(var k=0; k<8; k++){
            if((k===0)||(k===7)){
                star+=' *';
            } else {
                star+=' ';
            }
        }
    }
    console.log(star);
}

