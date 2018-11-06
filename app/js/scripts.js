var hamburger = document.querySelector('#pull');
var body = document.querySelector('body');
var nav  = document.querySelector('nav');
var breaksmall = 480;

//hw 2. make menu disappear after item is clicked on
//a) Attach click listenter to whole nav to catch ul li items. 
nav.addEventListener('click', showMenu);
//hamburger.addEventListener('click', showMenu)

//b) adjust function to prevent default only if hamburger is clicked
function showMenu() {
  var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  if (width < breaksmall +1) {
    body.classList.toggle('show-nav');
  }
  if (event.srcElement.id == 'pull') {
    event.preventDefault();
  }
  
}


