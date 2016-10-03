function checkName(){
    var x = document.getElementById("textbox");
    if (x.value.length < 1){
        alert("Please enter name!")
        x.focus();
    }
    else if (x.value === "Arnav"){
        alert("You are lame")
    }
    else if (x.value === "Matt"){
        alert("You're not cool")
    }
    else{
        alert("You are cool!")
    }
    
}

var pageColor = "30A170";

function changeColor(){
    if (pageColor == "30A170"){
        document.body.style.backgroundColor = "black";
        document.getElementById("dude").style.color = "white";
        pageColor = "#000000"
    }
    else{
        document.body.style.backgroundColor = "#30A170"
        document.getElementById("dude").style.color = "black";
        pageColor = "30A170";
    }
}

var angle = 0
 
function rotPic(){
    x = document.getElementById("rotDeg").value;
    angle += parseInt(x);
    document.getElementById("pic").style["-webkit-transform"] = "rotate(" + angle + "deg)";
}

var loc = 0

function movePic(){
    x = document.getElementById("translate").value;
    loc += parseInt(x);
    document.getElementById("pic").style["-webkit-transform"] = "translateX(" + loc + "px)";
}