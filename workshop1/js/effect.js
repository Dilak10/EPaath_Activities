var upperText;
var img;
var forFont = true;
var forAnimate = true;
var tHeight;
var tTop;
var changeHeight;
var changeTop;
var timer;
function init() {
    changeHeight=2;
    changeTop=1.0;
    tTop=50.0;
    timer=30;
    tHeight=0;
    upperText = document.getElementById("upperText");
    img = document.getElementById("headingRight");

}

function animate1() {
   
    img.style.height = (tHeight+changeHeight) + "%";
    img.style.top = (tTop)+"%";
    console.log(tHeight);
    tHeight+=changeHeight;
    tTop-=changeTop;
   // t = t + 5;
    if (tHeight > 100) {
        setTimeout(animate2,timer);
    } 
    else{
        setTimeout(animate1,timer);
    }
    
    

}

function animate2() {
   // t=100;

    img.style.height = (tHeight-changeHeight) + "%";
    img.style.top = (tTop+changeTop)+"%";
    console.log(tHeight);
     tHeight = tHeight - changeHeight;
    tTop+=changeTop;
     if (tHeight < 0) {

        setTimeout(animate1, timer);
    } 

    else{
        setTimeout(animate2, timer);
        }
  
   
}

/*
function animate3(){
    img.style.height = (tHeight+changeHeight) + "%";
    tHeight=tHeight + changeHeight;
    if(tHeight>100){
        changeHeight = -1;
    }
    else if(tHeight<0){
        changeHeight= +1;
    }
    setTimeout(animate3,timer);
    
    
}
*/
//this one for rotation
function rotateMe(){
    
    
}
function clickTop() {

    //this is for animation
    if (forAnimate) {
        animate1();
        forAnimate = !forAnimate;
    }



}


function clickLeft() {
    //this will change color of upper text

    upperText.style.color = "blue";


}

function clickRight() {

    //this is to change the background color and double the font of upper text


    // var z=parseInt(_upperText.style.fontSize);
    if (forFont) {
        upperText.style.background = "white";
        var i = parseInt(document.defaultView.getComputedStyle(upperText, null).fontSize);
        //alert(i);
        upperText.style.fontSize = (2 * i) + "px";
        forFont = !forFont;
    }

}



window.onload = init;
