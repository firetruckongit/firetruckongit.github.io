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
    myCarousel.classList.add("sticky-carosel");
    header.classList.remove("navbar-up");
  } else {
    header.classList.add("navbar-up");
    header.classList.remove("sticky");
    myCarousel.classList.remove("sticky-carosel");
  }
}
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
// Typer 2
    function setupTypewriter1(t) {
        var HTML = t.innerHTML;
      
        t.innerHTML = "";
      
        var cursorPosition = 0,
            tag = "",
            writingTag = false,
            tagOpen = false,
            typeSpeed = 100,
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
    
    // Typer 3
    function setupTypewriter2(t) {
        var HTML = t.innerHTML;
      
        t.innerHTML = "";
      
        var cursorPosition = 0,
            tag = "",
            writingTag = false,
            tagOpen = false,
            typeSpeed = 100,
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
var typer2 = document.getElementById('typewriter2');
    
typewriter2 = setupTypewriter(typewriter2);

var typer1 = document.getElementById('typewriter1');
    
typewriter1 = setupTypewriter(typewriter1);

var typer = document.getElementById('typewriter');



var position1 = document.getElementById("typewriter");

var boi = position1.offsetTop;

function pisanje1() {    
    typewriter = setupTypewriter(typewriter);
    if (window.pageYOffset > boi) {
        typewriter.type();
        typewriter1.type();
        typewriter2.type();
    }
    else{
        return;
    }
}