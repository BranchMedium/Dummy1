
let numSlides // myslides array index number
let answer // class name value
let numSl // division
let stopIt // stop sliding
let dont // stop doing the sliding
let mainObject = document.getElementById("you");
// class values stored in an array
let myslides = [
    "./fr/A1.png", "./fr/A2.png", "./fr/A3.png", "./fr/A4.png", "./fr/A5.png", "./fr/A6.png", 
    "./fr/A7.png", "./fr/A8.png", "./fr/A9.png", "./fr/A10.png", "./fr/A11.png", "./fr/A12.png", 
    "./fr/A13.png", "./fr/A14.png", "./fr/A15.png", "./fr/A16.png", "./fr/A17.png", "./fr/A18.png", 
    "./fr/A19.png", "./fr/A20.png", "./fr/A21.png", "./fr/A22.png", "./fr/A23.png"
]

// this function gives random value to select any key
numSl = 0;
answer = myslides[numSlides];
function numberingSlides() {  
    numSlides = numSl;
    
    if (numSl == myslides.length){
      return (numSlides-1); 
    }  
}
function alignment() {
    let vertical = [
        "./fr/A1.png", "./fr/A9.png", "./fr/A16.png", "./fr/A17.png", "./fr/A21.png", "./fr/A22.png", "./fr/A23.png"
    ];
    if (vertical.includes(answer)) {
       return "vertical"
    }
    else {
        return "horizontal"
    }
}
//this create the slides 
function slideIt() {
    numberingSlides();
    let changeAlignment = alignment();
    mainObject.className = changeAlignment;
    
    numSl++;
    return mainObject.src = answer.toString();
    
}



//this function set the background picture to slide one another
function action() {
    return setInterval(slideIt, 20000);
    
}
// this stops the setinterval by calling the clearInterval
/*function stop() {
    return clearInterval(dont);
}*/




//***************************************************** */



