function colorLinks(col="") {
    var links = document.getElementsByTagName("a");
    for(var i=0;i<links.length;i++)
    {
        if(links[i].href)
        {
            links[i].style.color = col;
        }
    }  
}

var light = true;

function lightSwitch(name="mySwitch"){
    if (document.getElementById(name).checked) {
        document.getElementById(name).checked = false;
    } else {
        document.getElementById(name).checked = true;
    }
    mySwitch();
}

function mySwitch(){
    topNav = document.body.getElementsByClassName("topnav")[0];
    if(light)
    {
        topNav.style.background = "#060A2A";
        topNav.style.color = "white";
        document.body.style.background = "#060A2A";
        document.body.style.color = "white";
        colorLinks("#E857C0");
    } else {
        topNav.style.background = "white";
        topNav.style.color = "black";
        document.body.style.background = "white";
        document.body.style.color = "black";
        colorLinks();
    }
    // Switch the light flag.
    light = !light;
};


// Listens for space-bar and changes light-switch value
window.addEventListener('keydown', function(e) {
    if(e.keyCode == 32) {
        e.preventDefault();
    }
});

window.onkeyup = function(e) {
    var key = e.keyCode ? e.keyCode : e.which;

    if (e.keyCode == 32) {
        lightSwitch();
    }
}

var showHide = function(id, text1, text2){
    elem = document.getElementById(id);
    if (elem.innerHTML == text1)
    {
        elem.innerHTML = text2;
    } else {
        elem.innerHTML = text1;
    }
}

window.addEventListener('load', (event) => {
    
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

// This make all outbound links open in a new tab
for (var links = document.links, i = 0, a; a = links[i]; i++) {
  if (a.host !== location.host) {a.target = '_blank';}
}
})  

// TODO: Make Navbar loader? (so that you can update nav pages easily)
