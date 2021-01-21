$(function() {

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
      infinite: false
   });

   // $('.product-tabs__top-item').on('click', function(e) {
   //    e.preventDefault();
   //    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
   //    $(this).addClass('product-tabs__top-item--active');

   //    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
   //    $($(this).attr('href')).addClass('product-tabs__content-item--active');

   // });

   // $('.product-slide__thumb').slick({
   //    asNavFor: '.product-slide__big',
   //    focusOnSelect: true,
   //    slidesToShow: 4,
   //    slidesToScroll: 1,
   //    vertical: true,
   //    draggable: false     
   // });
   // $('.product-slide__big').slick({
   //    asNavFor: '.product-slide__thumb',
   //    draggable: false,
   //    arrows: false,
   //    fade: true
   // });

   // $('.shop-content__filter-btn').on('click', function() {
   //    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
   //    $(this).addClass('shop-content__filter-btn--active');
   // });

   // $('.button-list').on('click', function() {
   //    $('.product-item').addClass('product-item--list');
   // });

   // $('.button-grid').on('click', function() {
   //    $('.product-item').removeClass('product-item--list');
   // });

   // $('.select-style, .product-one__item-num').styler();
   
   // $('.filter-price__input').ionRangeSlider({
   //    type: "double",
   //    prefix: "$",
   //    onStart: function (data){
   //       $('.filter-price__from').text(data.from);
   //       $('.filter-price__to').text(data.to);
   //    },
   //    onChange: function (data) {
   //       $('.filter-price__from').text(data.from);
   //       $('.filter-price__to').text(data.to);
   //    },

   // });

   // $('.top-slider__inner').slick({
   //    dots: true,
   //    arrows: false,
   //    fade: true,
   //    autoplay: true,
   //    autoplaySpeed: 2000
   // });

   // $(".star-rating").rateYo({
   //    starWidth: "17px",
   //    normalFill: "#ccccce",
   //    ratedFill: "#ffc35b",
   //    readOnly: true,
   //    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18pt" height="16pt" viewBox="0 0 18 16" version="1.1"><g id="surface1"><path style=" stroke:none;" d="M 8.101562 0.554688 L 6.0625 4.695312 L 1.496094 5.359375 C 0.679688 5.476562 0.351562 6.488281 0.945312 7.066406 L 4.246094 10.285156 L 3.464844 14.832031 C 3.324219 15.652344 4.191406 16.269531 4.914062 15.882812 L 9 13.738281 L 13.085938 15.882812 C 13.808594 16.265625 14.675781 15.652344 14.535156 14.832031 L 13.753906 10.285156 L 17.054688 7.066406 C 17.648438 6.488281 17.320312 5.476562 16.503906 5.359375 L 11.9375 4.695312 L 9.898438 0.554688 C 9.53125 -0.179688 8.472656 -0.191406 8.101562 0.554688 Z M 8.101562 0.554688 "/></g></svg>'
   // });

   // function getTimeRemaining(endtime) {
   //    const total = Date.parse(endtime) - Date.parse(new Date());
   //    const seconds = Math.floor((total / 1000) % 60);
   //    const minutes = Math.floor((total / 1000 / 60) % 60);
   //    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
   //    const days = Math.floor(total / (1000 * 60 * 60 * 24));

   //    return {
   //       total,
   //       days,
   //       hours,
   //       minutes,
   //       seconds
   //    };
   // }

   // function initializeClock(id, endtime) {
   //    const clock = document.querySelector('.promo__clock');
   //    const daysSpan = clock.querySelector('.promo__days');
   //    const hoursSpan = clock.querySelector('.promo__hours');
   //    const minutesSpan = clock.querySelector('.promo__minutes');
   //    const secondsSpan = clock.querySelector('.promo__seconds');

   //    function updateClock() {
   //       const t = getTimeRemaining(endtime);

   //       daysSpan.innerHTML = t.days;
   //       hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
   //       minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
   //       secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

   //       if (t.total <= 0) {
   //          clearInterval(timeinterval);
   //       }
   //    }

   //    updateClock();
   //    const timeinterval = setInterval(updateClock, 1000);
   // }

   // const deadline = $('.promo__clock').attr('data-time');
   // initializeClock('promo__clock', deadline);
   
 
});