// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction() + + pisanje1()};

// Get the header
var header = document.getElementById("nav-bar");
// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    header.classList.remove("navbar-up");
    container.classList.add("text-over-video-sticky");
  } else {
    header.classList.add("navbar-up");
    header.classList.remove("sticky");
    container.classList.remove("text-over-video-sticky");
  }
}

var i = 0;
var txt = 'A place for'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

setTimeout(function(){typeWriter();}, 1850)
// List of sentences
var _CONTENT = [ 
	"enthusiasts.", 
	"beginners.", 
	"artists.", 
	"web designers."
];

// Current sentence being processed
var _PART = 0;

// Character number of the current sentence being processed 
var _PART_INDEX = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;

// Element that holds the text
var _ELEMENT = document.querySelector("#texte");

// Cursor element 
var _CURSOR = document.querySelector("#cursore");

// Implements typing effect
function Type() { 
	// Get substring with 1 characater added
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX++;

	// If full sentence has been displayed then start to delete the sentence after some time
	if(text === _CONTENT[_PART]) {

		clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 85);
		}, 1500);
	}
}

// Implements deleting effect
function Delete() {
	// Get substring with 1 characater deleted
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX--;

	// If sentence has been deleted then start to display the next sentence
	if(text === '') {
		clearInterval(_INTERVAL_VAL);

		// If current sentence was last then display the first one, else move to the next
		if(_PART == (_CONTENT.length - 1))
			_PART = 0;
		else
			_PART++;
		
		_PART_INDEX = 0;

		// Start to display the next sentence after some time
		setTimeout(function() {
			_CURSOR.style.display = 'inline-block';
			_INTERVAL_VAL = setInterval(Type, 85);
		}, 200);
	}
}

// Start the typing effect on load
setTimeout(function(){_INTERVAL_VAL = setInterval(Type, 100);}, 2500);


// Typer 1
function setupTypewriter(t) {
	var HTML = t.innerHTML;
  
	t.innerHTML = "";
  
	var cursorPosition = 0,
		tag = "",
		writingTag = false,
		tagOpen = false,
		typeSpeed = 50,
	tempTypeSpeed = 0;
  
	var type = function() {
	
		if (writingTag === true) {
			tag += HTML[cursorPosition];
		}
  
		if (HTML[cursorPosition] === "<") {
			tempTypeSpeed = 0;
			if (tagOpen) {
				tagOpen = false;
				writingTag = true;
			} else {
				tag = "";
				tagOpen = true;
				writingTag = true;
				tag += HTML[cursorPosition]; 
			}
		}
		if (!writingTag && tagOpen) {
			tag.innerHTML += HTML[cursorPosition];
		}
		if (!writingTag && !tagOpen) {
			if (HTML[cursorPosition] === " ") {
				tempTypeSpeed = 0;
			}
			else {
				tempTypeSpeed = (Math.random() * typeSpeed) + 50;
			}
			t.innerHTML += HTML[cursorPosition];
		}
		if (writingTag === true && HTML[cursorPosition] === ">") {
			tempTypeSpeed = (Math.random() * typeSpeed) + 50;
			writingTag = false;
			if (tagOpen) {
				var newSpan = document.createElement("span");
				t.appendChild(newSpan);
				newSpan.innerHTML = tag;
				tag = newSpan.firstChild;
			}
		}
  
		cursorPosition += 1;
		if (cursorPosition < HTML.length - 1) {
			setTimeout(type, tempTypeSpeed);
		}
  
	};
  
	return {
		type: type
	};
  }

var typer = document.getElementById('typewriter');

var position1 = document.getElementById("typewriter");

var boi = position1.offsetTop;

function pisanje1() {    
  typewriter = setupTypewriter(typewriter);
  if (window.pageYOffset > boi) {
	  typewriter.type();
  }
  else{
	  return;
  }
}