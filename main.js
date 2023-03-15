/* var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 50,
    showCursor: false
  }); */

var fadecounter = 0;
var scrollEnabled = true;
var slideDisp = document.getElementById('slide')
slideDisp.counter = 0;

setTimeout(() => {
    slideDisp.counter += 1;
    slidechange();
    console.log(slideDisp.counter)
}, 1000);

window.onwheel = function(e) {
  if (e.deltaY > 10 && scrollEnabled == true && slideDisp.counter < 5) {
    console.log('reveal');
    scrollEnabled = false;
    slidechange()
    slideDisp.counter += 1;
    setTimeout(() => {
      scrollEnabled = true;
    }, 1000);
  }
  if (e.deltaY < -10 && scrollEnabled == true && slideDisp.counter > 0) {
    console.log('reverse reveal');
    scrollEnabled = false;
    slidechange()
    slideDisp.counter -= 1;
    setTimeout(() => {
      scrollEnabled = true;
    }, 1000);
  }
}

function slidechange() {
  switch (slideDisp.counter) {
    case 1:
      slideDisp.innerHTML = 
        '<img src="Headshot-2020 (3).jpg">'
      ;
      slideDisp.classList.toggle('fade');
      console.log(slideDisp.counter)
      break;
    case 2:
      slideDisp.innerHTML = '';
      console.log(slideDisp.counter)
      break;
    case 3:
      slideDisp.innerHTML = '';
      console.log(slideDisp.counter)
      break;
    case 4:
      slideDisp.innerHTML = '';
      console.log(slideDisp.counter)
      break;
    case 5:
      slideDisp.innerHTML = '';
      console.log(slideDisp.counter)
      break;
  }

}