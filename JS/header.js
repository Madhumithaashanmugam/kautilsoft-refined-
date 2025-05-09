
  const hamburger = document.querySelector('.hamburger');
  const sideMenu = document.querySelector('.side-menu');
  const closeBtn = document.querySelector('.close-btn');

  hamburger.addEventListener('click', () => {
    sideMenu.style.right = '0';
    hamburger.style.display = 'none'; // Hide hamburger when menu is open
  });

  closeBtn.addEventListener('click', () => {
    sideMenu.style.right = '-250px';
    hamburger.style.display = 'block'; // Show hamburger when menu is closed
  });

 const menuLinks = document.querySelectorAll('.side-menu a');

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    sideMenu.style.right = '-250px';
    hamburger.style.display = 'block'; // Show hamburger again
  });
});


  let slides = document.querySelectorAll('.hero-content .slide');
  let current = 0;

  function showNextSlide() {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }

  setInterval(showNextSlide, 5000); // Change every 5 seconds


  $(document).ready(function(){
    $('.image-carousel').slick({
      slidesToShow: 1,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 3000,
      infinite: true,
      speed: 600,
      dots: false,
      prevArrow: '<button type="button" class="slick-prev">&#10094;</button>',
      nextArrow: '<button type="button" class="slick-next">&#10095;</button>',
    });
  });


  document.querySelectorAll('.flip-btn').forEach((btn, index) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.flip-card')[index].classList.add('flipped');
    });
  });

  document.querySelectorAll('.back-btn').forEach((btn, index) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.flip-card')[index].classList.remove('flipped');
    });
  });