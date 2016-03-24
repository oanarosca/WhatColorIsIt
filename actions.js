function addZero (x) {
  if (x < 10)
    x = '0'+x;
  return x;
};

function start () {
  var today = new Date();
  var hr = today.getHours();
  var min = today.getMinutes();
  var sec = today.getSeconds();
  hr = addZero(hr);
  min = addZero(min);
  sec = addZero(sec);
  document.getElementById('time').innerHTML = hr + ":" + min + ":" + sec;
  var str = '#'+hr+min+sec;
  $('body').animate({
    backgroundColor: str
  }, 800 );
  var time = setTimeout(start, 500);
};
