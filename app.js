'use strict'; // reduces silent errors, improves performance and provides you with more warnings and fewer unsafe features

// create a reference to the button 
const switcher = document.querySelector('.btn'); 

// add the event listener and event handler for the click event
switcher.addEventListener('click', function() { 
    document.body.classList.toggle('dark-theme') 
 
    var className = document.body.className; 
    if(className == "light-theme") { 
        this.textContent = "Dark"; // change content of button 
    } 
    else { 
        this.textContent = "Light"; 
    } // the function passed is the event handler
    console.log('current class name: ' + className); // message shows in browser developer tools
});
