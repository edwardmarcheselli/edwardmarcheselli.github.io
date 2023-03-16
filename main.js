/* var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 50,
    showCursor: false
  }); */

var fadecounter = 0;
var scrollEnabled = true;
var slideDisp = document.getElementById('slide')
slideDisp.counter = 1;
slidechange()

function pagechange(x) {
  slideDisp.counter = x;
  slidechange();
}

// setTimeout(() => {
//     slideDisp.counter += 1;
//     slidechange();
//     console.log(slideDisp.counter)
// }, 1000);

// window.onwheel = function(e) {
//   if (e.deltaY > 20 && scrollEnabled == true && slideDisp.counter < 3) {
//     console.log('reveal');
//     scrollEnabled = false;
//     slidechange()
//     slideDisp.counter += 1;
//     scrollEnabled = true;
//     /* setTimeout(() => {
//       scrollEnabled = true;
//     }, 500); */
//   }
//   if (e.deltaY < -20 && scrollEnabled == true && slideDisp.counter > 0) {
//     console.log('reverse reveal');
//     scrollEnabled = false;
//     slidechange()
//     slideDisp.counter -= 1;
//     scrollEnabled = true;
//     /* setTimeout(() => {
//       scrollEnabled = true;
//     }, 500); */
//   }
// }

function slidechange() {
  switch (slideDisp.counter) {
    case 1:
      $(() => {$("#slide").load("intro.html")});
      console.log(slideDisp.counter);
      break;
    case 2:
      $(() => {$("#slide").load("projects.html")});
      //slideDisp.classList.toggle('fade');
      console.log(slideDisp.counter);
      break;
    case 3:
      $(() => {$("#slide").load("experience.html")});
      console.log(slideDisp.counter);
      break;
    case 4:
      $(() => {$("#slide").load("about.html")});
      console.log(slideDisp.counter);
      break;
    case 5:
      slideDisp.innerHTML = '';
      console.log(slideDisp.counter);
      break;
  }
}