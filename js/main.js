const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}

$(document).ready(function () {

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /** click event on toggle menu */
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    })

    // owl-crousel for blog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });


    // click to scroll top
    $('.move-up span').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })

    // AOS Instance
    AOS.init();

});

var click = 0;
function fun(){
   document.getElementById('counts').innerHTML = ++click;
   click = click;
}
var click = 0;
var btnvar1 = document.getElementById('btnh1');
function Toggle1(){
    document.getElementById('count1').innerHTML = ++click;
    click = click;
         if (btnvar1.style.color =="red") {
             btnvar1.style.color = "grey"
         }
    else{
        btnvar1.style.color = "red"
    }
         
        

}

var click = 0;
var btnvar2 = document.getElementById('btnh2');

function Toggle2(){
    document.getElementById('count2').innerHTML = ++click;
    click = click;
         if (btnvar2.style.color =="red") {
             btnvar2.style.color = "grey"
         }
         else{
             btnvar2.style.color = "red"
         }
}
var click = 0;
var btnvar3 = document.getElementById('btnh3');
function Toggle3(){
    document.getElementById('count3').innerHTML = ++click;
    click = click;
         if (btnvar3.style.color =="red") {
             btnvar3.style.color = "grey"
         }
         else{
             btnvar3.style.color = "red"
         }
}
var click = 0;
var btnvar4 = document.getElementById('btnh4');
function Toggle4(){
    document.getElementById('count4').innerHTML = ++click;
    click = click;
         if (btnvar4.style.color =="red") {
             btnvar4.style.color = "grey"
         }
         else{
             btnvar4.style.color = "red"
         }
}
var click = 0;
var btnvar5 = document.getElementById('btnh5');
function Toggle5(){
    document.getElementById('count5').innerHTML = ++click;
    click = click;
         if (btnvar5.style.color =="red") {
             btnvar5.style.color = "grey"

         }
         else{
             btnvar5.style.color = "red"
         }
}
var click = 0;
var btnvar6 = document.getElementById('btnh6');
function Toggle6(){
    document.getElementById('count6').innerHTML = ++click;
    click = click;
         if (btnvar6.style.color =="red") {
             btnvar6.style.color = "grey"
         }
         else{
             btnvar6.style.color = "red"
         }
}
var click = 0;
var btnvar7 = document.getElementById('btnh7');
function Toggle7(){
    document.getElementById('count7').innerHTML = ++click;
    click = click;
         if (btnvar7.style.color =="red") {
             btnvar7.style.color = "grey"
         }
         else{
             btnvar7.style.color = "red"
         }
}
var click = 0;
var btnvar8 = document.getElementById('btnh8');
function Toggle8(){
    document.getElementById('count8').innerHTML = ++click;
    click = click;
         if (btnvar8.style.color =="red") {
             btnvar8.style.color = "grey"
         }
         else{
             btnvar8.style.color = "red"
         }
}

const parentContainer =  document.querySelector('.read-more-container');

parentContainer.addEventListener('click', event=>{

    const current = event.target;

    const isReadMoreBtn = current.className.includes('read-more-btn');

    if(!isReadMoreBtn) return;

    const currentText = event.target.parentNode.querySelector('.read-more-text');

    currentText.classList.toggle('read-more-text--show');

    current.textContent = current.textContent.includes('Read More') ? "Read Less..." : "Read More...";

})

  
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').forEach(link =>{
    if(link.href.includes(`${activePage}`)){
        console.log(`${activePage}`)
    }
})


