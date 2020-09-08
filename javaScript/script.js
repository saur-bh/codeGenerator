var color1 = document.getElementById("favcolor1");
var color2 = document.getElementById("favcolor2");
var body = document.getElementById("selection-id");


function setGradient(){
    body.style.background="linear-gradient(to left, "+color1.value+", "+color2.value+")";
    document.querySelector("h2").textContent=" set css as: body{background:"+body.style.background+";}";
}


// add eventListener 


color1.addEventListener("input",setGradient);


color2.addEventListener("input",setGradient);

// set the H3 
