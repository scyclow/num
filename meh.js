TIME = 50;

var letters = '0123456789ABCDEF'.split('');
var len = letters.length;
function randColors() {
  var color1 = '#';
  var color2 = '#';
  for (var i = 0; i < 6; i++ ) {
    var letter = Math.floor(Math.random() * 16);
    var inverse = (letter * -1) + len
    color1 += letters[letter];
    color2 += letters[inverse];
  }
  return [color1, color2];
}

var num = 5;
var num2 = 0;
function changeNum() {
  num++; num2--;
  num = num > 9 ? 0 : num;
  num2 = num2 < -9 ? 0 : num2;
  return [num, num2 * -1];
}

document.addEventListener("DOMContentLoaded", function(event) {
  var fuck = document.getElementById('fuck');

  var size = 500;
  setInterval(function() {
    var c = randColors();
    size = Math.floor(Math.random() * 500) + 'px';
    fuck.style['font-size'] = size;
    fuck.style['width'] = fuck.style['height'] = size;
    fuck.style['border-radius'] = size;
    fuck.style['border'] = Math.floor(Math.random() * 50)+ 'px solid '+c[1];
    fuck.style['background-color'] = c[0];
    fuck.style['color'] = c[1];

    var n = changeNum();
    fuck.innerHTML = n[0] + '' + n[1];

    document.title = '#'+n[0]+''+n[1]+'%';
    console.log('#'+n[0]+n[1]+'%');
  }, TIME);
});

