var circle = document.getElementById("circle");
var upBtn = document.getElementById("upBtn");
var downBtn = document.getElementById("downBtn");

var rotateValue0 = circle.style.transform;
var rotateSum0;


upBtn.onclick = function () {
    rotateSum0 = rotateValue0 + "rotate(-90deg)";
    circle.style.transform = rotateSum0;

    rotateValue0 = rotateSum0;
}

downBtn.onclick = function () {
    rotateSum0 = rotateValue0 + "rotate(90deg)";
    circle.style.transform = rotateSum0;

    rotateValue0 = rotateSum0;
}

// ---------------------------------------------------------------------


var circle1 = document.getElementById("circle1");
var upBtn1 = document.getElementById("upBtn1");
var downBtn1 = document.getElementById("downBtn1");

var rotateValue1 = circle1.style.transform;
var rotateSum1;


upBtn1.onclick = function () {
    rotateSum1 = rotateValue1 + "rotate(-90deg)";
    circle1.style.transform = rotateSum1;

    rotateValue1 = rotateSum1;
}

downBtn1.onclick = function () {
    rotateSum1 = rotateValue1 + "rotate(90deg)";
    circle1.style.transform = rotateSum1;

    rotateValue1 = rotateSum1;
}

// ----------------------------------------------------------------
var circle2 = document.getElementById("circle2");
var upBtn2 = document.getElementById("upBtn2");
var downBtn2 = document.getElementById("downBtn2");

var rotateValue2 = circle2.style.transform;
var rotateSum2;


upBtn2.onclick = function () {
    rotateSum2 = rotateValue2 + "rotate(-90deg)";
    circle2.style.transform = rotateSum1;

    rotateValue2 = rotateSum2;
}

downBtn2.onclick = function () {
    rotateSum2 = rotateValue2 + "rotate(90deg)";
    circle2.style.transform = rotateSum2;

    rotateValue2 = rotateSum2;
}
// -----------------------------------------------------------------------
var circle3 = document.getElementById("circle3");
var upBtn3 = document.getElementById("upBtn3");
var downBtn3 = document.getElementById("downBtn3");

var rotateValue3 = circle3.style.transform;
var rotateSum3;


upBtn3.onclick = function () {
    rotateSum3 = rotateValue3 + "rotate(-90deg)";
    circle3.style.transform = rotateSum3;

    rotateValue3 = rotateSum3;
}

downBtn3.onclick = function () {
    rotateSum3 = rotateValue3 + "rotate(90deg)";
    circle3.style.transform = rotateSum3;

    rotateValue3 = rotateSum3;
}
// -----------------------------------------------------------------------
var circle4 = document.getElementById("circle4");
var upBtn4 = document.getElementById("upBtn4");
var downBtn4 = document.getElementById("downBtn4");

var rotateValue4 = circle4.style.transform;
var rotateSum4;


upBtn4.onclick = function () {
    rotateSum4 = rotateValue4 + "rotate(-90deg)";
    circle4.style.transform = rotateSum4;

    rotateValue4 = rotateSum4;
}

downBtn4.onclick = function () {
    rotateSum4 = rotateValue4 + "rotate(90deg)";
    circle4.style.transform = rotateSum4;

    rotateValue4 = rotateSum4;
}

// ---------------------------------------------------------------------------------
var circle5 = document.getElementById("circle5");
var upBtn5 = document.getElementById("upBtn5");
var downBtn5 = document.getElementById("downBtn5");

var rotateValue5 = circle5.style.transform;
var rotateSum5;


upBtn5.onclick = function () {
    rotateSum5 = rotateValue5 + "rotate(-90deg)";
    circle5.style.transform = rotateSum5;

    rotateValue5 = rotateSum5;
}

downBtn5.onclick = function () {
    rotateSum5 = rotateValue5 + "rotate(90deg)";
    circle5.style.transform = rotateSum5;

    rotateValue5 = rotateSum5;
}
setInterval(function () {
    rotateSum0 = rotateValue0 + "rotate(90deg)";
    circle.style.transform = rotateSum0;
    rotateValue0 = rotateSum0;
    // ------------------------------
    rotateSum1 = rotateValue1 + "rotate(90deg)";
    circle1.style.transform = rotateSum1;
    rotateValue1 = rotateSum1;
    // ------------------------------ 
    rotateSum2 = rotateValue2 + "rotate(90deg)";
    circle2.style.transform = rotateSum2;
    rotateValue2 = rotateSum2;
    // ------------------------------
    rotateSum3 = rotateValue3 + "rotate(90deg)";
    circle3.style.transform = rotateSum3;
    rotateValue3 = rotateSum3;
    // ------------------------------
    rotateSum4 = rotateValue4 + "rotate(90deg)";
    circle4.style.transform = rotateSum4;
    rotateValue4 = rotateSum4;
    //  ------------------------------
    rotateSum5 = rotateValue5 + "rotate(90deg)";
    circle5.style.transform = rotateSum5;
    rotateValue5 = rotateSum5;

}, 3000);


// function search_animal() {
//     let input = document.getElementById('searchbar').value
//     input=input.toLowerCase();
//     let x = document.getElementsByClassName('animals');

//     for (i = 0; i < x.length; i++) { 
//         if (!x[i].innerHTML.toLowerCase().includes(input)) {
//             x[i].style.display="none";
//         }
//         else {
//             x[i].style.display="list-item";                 
//         }
//     }
// }


let mybutton = document.getElementById("myBtnOne");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}