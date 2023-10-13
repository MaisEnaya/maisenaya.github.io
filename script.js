let fun = 300;
const content = document.getElementById("content");

content.addEventListener("mousemove", function (event) {
    const containerRect = content.getBoundingClientRect();
    const mouseX = event.clientX - containerRect.left;

    // Calculate the hue based on the mouse position
    // fun = (mouseX / containerRect.width) * 300;
    fun = Math.min(Math.max((mouseX / containerRect.width) * 140, 0), 140) + 160;


    // Update the CSS variable by adding 'deg' to the value
    document.documentElement.style.setProperty("--fun", `${fun}deg`);
});



// nav script 
//  navigation adapted from a11ymaaters, Accessible Mobile Navigation publihsed on Sunday, September 18, 2016 by Ahmad Shadeed 

var toggle = document.querySelector('#toggle');
var menu = document.querySelector('#menu');
var menuItems = document.querySelectorAll('#menu li a');

// toggle.style.setAttribute('area-expanded','false');

toggle.addEventListener('click', function(){
  if (menu.classList.contains('is-active')) {
    this.setAttribute('aria-expanded', 'false');
    menu.classList.remove('is-active');
  } else {
    menu.classList.add('is-active'); 
    this.setAttribute('aria-expanded', 'true');
    //menuItems[0].focus();
  }
});

// end of nav script
