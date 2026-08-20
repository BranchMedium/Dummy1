
let numSlides // myslides array index number
let answer // class name value
let numSl // division
let stopIt // stop sliding
let dont // stop doing the sliding
let mainObject = document.getElementById("you");
// class values stored in an array
let myslides = [
    "./fr/A2.png", "./fr/A3.png", "./fr/A4.png", "./fr/A5.png", "./fr/A6.png", 
    "./fr/A7.png", "./fr/A8.png", "./fr/A10.png", "./fr/A11.png", "./fr/A12.png", 
    "./fr/A13.png", "./fr/A14.png", "./fr/A15.png", "./fr/A18.png", 
    "./fr/A19.png", "./fr/A20.png"
]
// this function gives random value to select any key
numSl = 0;
function numberingSlides() {  
    numSlides = numSl;
    
    if(numSl == myslides.length){
        --numSl
    }
    return numSlides;  
}

//this create the slides 
function slideIt() {
    numberingSlides();
    answer = myslides[numSlides];
    numSl++;
    mainObject.src = answer.toString();
}

//this function set the background picture to slide one another
function action() {
    dont = setInterval(slideIt, 10000);
    return dont
}
// this stops the setinterval by calling the clearInterval
function stop() {
    return clearInterval(dont);
}



//***************************************************** */



