$(function() {

   $('.menu__btn').on('click', function () {
      $('.menu__list').toggleClass('menu__list--active');
   });

   $('.fishing__link').on('click', function (e) {
      e.preventDefault();
      $('.fishing__link').removeClass('fishing__link--active');
      $(this).addClass('fishing__link--active');

      $('.fishing__content-item').removeClass('fishing__content-item--active');
      $($(this).attr('href')).addClass('fishing__content-item--active');

   });

   $('.fishing__slider').slick({
      nextArrow: '<button type="button" class="slick-next"><svg width="201" height="16" viewBox="0 0 201 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M200.707 8.70711C201.098 8.31658 201.098 7.68342 200.707 7.29289L194.343 0.928932C193.953 0.538408 193.319 0.538408 192.929 0.928932C192.538 1.31946 192.538 1.95262 192.929 2.34315L198.586 8L192.929 13.6569C192.538 14.0474 192.538 14.6805 192.929 15.0711C193.319 15.4616 193.953 15.4616 194.343 15.0711L200.707 8.70711ZM0 9H200V7H0V9Z" fill="#40434C"/></svg></button>',
      prevArrow: '<button type="button" class="slick-prev"><svg width="201" height="16" viewBox="0 0 201 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.292892 8.70711C-0.0976257 8.31658 -0.0976257 7.68342 0.292892 7.29289L6.65686 0.928932C7.04738 0.538408 7.68054 0.538408 8.07108 0.928932C8.46159 1.31946 8.46159 1.95262 8.07108 2.34315L2.41422 8L8.07108 13.6569C8.46159 14.0474 8.46159 14.6805 8.07108 15.0711C7.68054 15.4616 7.04738 15.4616 6.65686 15.0711L0.292892 8.70711ZM201 9H1V7H201V9Z" fill="#40434C"/></svg></button>',
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: false,
      responsive: [
         {
            breakpoint: 1501,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 1,
            },            
         },

         {
            breakpoint: 769,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
               dots: true,
               arrows:false,
            },
         },

         {
            breakpoint: 501,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               dots: true,
               arrows: false,
            },
         },
      ]
   });

   

   
   // $('.shop-content__filter-btn').on('click', function() {
   //    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
   //    $(this).addClass('shop-content__filter-btn--active');
   // });

   // $('.button-list').on('click', function() {
   //    $('.product-item').addClass('product-item--list');
   // });

   
   
  

   

   

   
 
});