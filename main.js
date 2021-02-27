$('.slider').slick({
    infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
    dots: true,
    responsive: [{
      breakpoint: 376,  
      settings: {
        slidesToShow: 1,
      }
    }]
});
