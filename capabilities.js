var content1 = document.getElementById("content1");
var content2 = document.getElementById("content2");
var content3 = document.getElementById("content3");
var content4 = document.getElementById("content4");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");

function openKITTING(){
    content1.style.transform = "translateX(0)";
    content2.style.transform = "translateX(100%)";
    content3.style.transform = "translateX(100%)";
    content4.style.transform = "translateX(100%)";
    btn1.style.color = "#0580a6";
    btn2.style.color = "#000";
    btn3.style.color = "#000";
    btn4.style.color = "#000";
    content1.style.transitionDelay = "0.3s";
    content2.style.transitionDelay = "0s";
    content3.style.transitionDelay = "0s";
    content4.style.transitionDelay = "0s";
}

function openPACKING(){
    content1.style.transform = "translateX(100%)";
    content2.style.transform = "translateX(0)";
    content3.style.transform = "translateX(100%)";
    content4.style.transform = "translateX(100%)";
    btn1.style.color = "#000";
    btn2.style.color = "#0580a6";
    btn3.style.color = "#000";
    btn4.style.color = "#000";
    content1.style.transitionDelay = "0s";
    content2.style.transitionDelay = "0.3s";
    content3.style.transitionDelay = "0s";
    content4.style.transitionDelay = "0s";
}

function openCONTRACT(){
    content1.style.transform = "translateX(100%)";
    content2.style.transform = "translateX(100%)";
    content3.style.transform = "translateX(0)";
    content4.style.transform = "translateX(100%)";
    btn1.style.color = "#000";
    btn2.style.color = "#000";
    btn3.style.color = "#0580a6";
    btn4.style.color = "#000";
    content1.style.transitionDelay = "0s";
    content2.style.transitionDelay = "0s";
    content3.style.transitionDelay = "0.3s";
    content4.style.transitionDelay = "0s";
}

function openPRINTING(){
    content1.style.transform = "translateX(100%)";
    content2.style.transform = "translateX(100%)";
    content3.style.transform = "translateX(100%)";
    content4.style.transform = "translateX(0)";
    btn1.style.color = "#000";
    btn2.style.color = "#000";
    btn3.style.color = "#000";
    btn4.style.color = "#0580a6";
    content1.style.transitionDelay = "0s";
    content2.style.transitionDelay = "0s";
    content3.style.transitionDelay = "0s";
    content4.style.transitionDelay = "0.3s";
}


// Elements
var badge = document.querySelector('.badge');
var caption = document.querySelector('figcaption');
var details = document.querySelector('.details');
var detailsContent = document.querySelector('.details__content');

var lowResImage = document.querySelector('.img');
var highResImage = document.createElement('img');

var front = document.querySelector('.front');
var back = document.querySelector('.back');
var showFrontBtn = document.querySelector('#show-front');
var showBackBtn = document.querySelector('#show-back');

// Figcaption Hover Preview
caption.addEventListener('mouseover', function () {
  var contentHeight = detailsContent.offsetHeight;
  details.style.height = contentHeight + 10 + 'px';
  badge.innerHTML = '<i class="fas fa-minus-square"></i>';
});

caption.addEventListener('mouseout', function () {
  details.style.height = 0;
  badge.innerHTML = '<i class="fas fa-plus-square"></i>';
});

// Lazy Load Figure Image
highResImage.onload = function () {
  lowResImage.src = highResImage.src;
}
setTimeout(function () {
 highResImage.src = 'https://images.pexels.com/photos/1168981/pexels-photo-1168981.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=3595&w=5407';
}, 1000);

// Card Flipping
showBackBtn.addEventListener('click', function () {
  back.style.transform = "perspective( 2000px ) rotateY( 0deg )";
  front.style.transform = "perspective( 2000px ) rotateY( -180deg )";
});

showFrontBtn.addEventListener('click', function () {
  front.style.transform = "perspective( 2000px ) rotateY( 0deg )";
  back.style.transform = "perspective( 2000px ) rotateY( 180deg )";
});



jQuery(document).ready(function($) {

    //Count nr. of square classes
    var countSquare = $('.square').length;
  
    //For each Square found add BG image
    for (i = 0; i < countSquare; i++) {
      var firstImage = $('.square').eq([i]);
      var secondImage = $('.square2').eq([i]);
  
      var getImage = firstImage.attr('data-image');
      var getImage2 = secondImage.attr('data-image');
  
      firstImage.css('background-image', 'url(' + getImage + ')');
      secondImage.css('background-image', 'url(' + getImage2 + ')');
    }
  
  });



