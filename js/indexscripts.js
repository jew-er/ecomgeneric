
// y.addEventListener('click',()=>{
//     if(x.classList.contains('active')){
//         x.classList.remove('active');
//     } else {
//         x.classList.add('active');
//     }
// })

let navbtn= [...document.querySelectorAll('.navbtn')];
let navdrop = [...document.querySelectorAll('.nav-dropdown')];
let navclasslist = navdrop.map(x=>x.classList);

navbtn.forEach(x=>{
x.addEventListener('click', ()=>{
    let index = navbtn.indexOf(x);
    if(navdrop[index].classList.contains("active")){
        navdrop[index].classList.remove("active");
    } else {
    let taken = -1;
    navclasslist.forEach((i)=>{
        if(i.contains("active"))
        taken = navclasslist.indexOf(i);
        });

        if(taken === -1){
            navdrop[index].classList.add('active');
        } else {
            navdrop[taken].classList.remove('active');
            this.setTimeout(() => {
                navdrop[index].classList.add('active');
                
            }, 400);

        }
    }
    })
});



$(document).ready(function () {
   
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        nextArrow: '<i class="fa fa-arrow-right larr"></i>',
        prevArrow: '<i class="fa fa-arrow-left rarr"></i>',



    });
    $('.slider-nav').slick({
        slidesToShow: 6,
        asNavFor: '.slider-for',
        dots: false,
        focusOnSelect: true,
        centerMode: true
    });

    var addclass = 'color';
    var $cols = $('.qimg').click(function (e) {
        
        $cols.attr('id','no');
        $(this).attr('id','op');
    });
  
    $('.qimg').first().click();
});