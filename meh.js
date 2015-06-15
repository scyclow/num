TIME = 25;

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

document.addEventListener("DOMContentLoaded", function(event) {
  var fuck = document.getElementById('fuck');
  var bod = document.getElementsByTagName('body')[0];
  var num = 5;
  var num2 = 0;
  var size = 500;
  setInterval(function() {
    var c = randColors();
    size = Math.floor(Math.random() * 500);
    fuck.style['font-size'] = size + 'px';
    fuck.style['width'] = fuck.style['height'] = size + 'px';
    fuck.style['border-radius'] = size + 'px';
    fuck.style['border'] = Math.floor(Math.random() * 50)+ 'px solid '+c[1];
    fuck.style['background-color'] = c[0];
    fuck.style['color'] = c[1];
    // bod.style['background-color'] = c[1];
    num++
    num2--
    num = num > 9 ? 0 : num;
    num2 = num2 < -9 ? 0 : num2;
    fuck.innerHTML = num + '' + (num2 * -1);
    document.title = '#'+num+''+(num2 * -1)+'%';
    console.log('#'+num+(num2 * -1)+'%');
  }, TIME*2);
});

