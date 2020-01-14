$(document).ready(function(){
    $(".slide-one").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items: 1,
        dots: true,
        responsive:{
          0:{
            nav: false,
            dots: false
          },
          950:{
            nav: true,
            dots: true
          }
        }
        });
    $(".slide-two").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items: 4,
        dots: false,
        responsive:{
          0:{
            items: 1
          },
          950:{
            items: 4,
            nav:true
          }
        }
    });
    $(".slide-three").owlCarousel({
      loop:false,
      nav:true,
      dots: false,
      items: 7,
      mouseDrag: false,
      responsive:{
        0:{
          items: 7,
          nav: true,
          mouseDrag: true,
          loop: true
        },
        950:{
          items: 27,
          nav: false,
          mouseDrag: true
        }
      }
      });
  });



$(function () {
  $('div.tabs_caption').on('click', 'div:not(.active)', function () {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('section.tabs').find('div.tabs_content').removeClass('active').eq($(this).index()).addClass('active');
  });
});

$(function () {

  $('div.season-toggle').on('click', 'div:not(.active)', function () {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('section.seasons').find('div.seasons-content').removeClass('active').eq($(this).index()).addClass('active');
  });
});

$('.mobile-factory').click(function (){
  $('.aside').addClass('active');
});

$('.aside-viev').click(function (){
  $('.aside').removeClass('active');
});

$('.menubutton').click(function (){
  $('.menu').toggleClass('active');
  $('.overlay').toggleClass('active');
  $('body').toggleClass('overflow');
});

$('.overlay').click(function (){
  $('.aside').removeClass('active');
  $('.menu').removeClass('active');
});

const items = document.querySelectorAll(".mobile-button");

function toggleAccordion(){
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

const items_text = document.querySelectorAll(".about-header");

function toggleAccordion(){
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
}

items_text.forEach(item => item.addEventListener('click', toggleAccordion));

const footer = document.querySelectorAll(".footer-header");

function toggleAccordion(){
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
}

footer.forEach(item => item.addEventListener('click', toggleAccordion));

const menuMobile = document.querySelectorAll(".dropdown-active");

function toggleAccordion(){
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
}

menuMobile.forEach(item => item.addEventListener('click', toggleAccordion));

