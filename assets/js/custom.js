(function($) {

	$(document).ready(function() {
	  $('body').addClass('js');
	  var $menu = $('#menu'),
	    $menulink = $('.menu-link');
	  
	$menulink.click(function() {
	  $menulink.toggleClass('active');
	  $menu.toggleClass('active');
	  return false;
	});});


	videoPopup();


	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:30,
	    nav:true,
	    autoplay:true,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        550:{
	            items:2
	        },
	        750:{
	            items:3
	        },
	        1000:{
	            items:4
	        },
	        1200:{
	            items:5
	        }
	    }
	})


	$(".Modern-Slider").slick({
	    autoplay:true,
	    autoplaySpeed:10000,
	    speed:600,
	    slidesToShow:1,
	    slidesToScroll:1,
	    pauseOnHover:false,
	    dots:true,
	    pauseOnDotsHover:true,
	    cssEase:'fade',
	   // fade:true,
	    draggable:false,
	    prevArrow:'<button class="PrevArrow"></button>',
	    nextArrow:'<button class="NextArrow"></button>', 
	});


	$("div.features-post").hover(
	    function() {
	        $(this).find("div.content-hide").slideToggle("medium");
	    },
	    function() {
	        $(this).find("div.content-hide").slideToggle("medium");
	    }
	 );


	$( "#tabs" ).tabs();


	(function init() {
	  function getTimeRemaining(endtime) {
	    var t = Date.parse(endtime) - Date.parse(new Date());
	    var seconds = Math.floor((t / 1000) % 60);
	    var minutes = Math.floor((t / 1000 / 60) % 60);
	    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
	    var days = Math.floor(t / (1000 * 60 * 60 * 24));
	    return {
	      'total': t,
	      'days': days,
	      'hours': hours,
	      'minutes': minutes,
	      'seconds': seconds
	    };
	  }
	  
	  function initializeClock(endtime){
	  var timeinterval = setInterval(function(){
	    var t = getTimeRemaining(endtime);
	    document.querySelector(".days > .value").innerText=t.days;
	    document.querySelector(".hours > .value").innerText=t.hours;
	    document.querySelector(".minutes > .value").innerText=t.minutes;
	    document.querySelector(".seconds > .value").innerText=t.seconds;
	    if(t.total<=0){
	      clearInterval(timeinterval);
	    }
	  },1000);
	}
	initializeClock(((new Date()).getFullYear()+1) + "/1/1")
	})()


	// Course contact button click handler
	$(document).on('click', '.contact-course', function(e) {
	  e.preventDefault();

	  // Get course data from data attributes
	  var courseName = $(this).data('course');
	  var grades = $(this).data('grades');

	  // Pre-populate message textarea
	  var message = "I'm interested in the \"" + courseName + "\" course for my child in Grade " + grades + ".";
	  $('#message').val(message);

	  // Scroll to contact section
	  var contactSection = $('[data-section="section6"]');
	  if (contactSection.length) {
	    $('html, body').animate({
	      scrollTop: contactSection.offset().top - 0
	    }, 800);
	  }

	  // Optional: Focus on the message field
	  setTimeout(function() {
	    $('#message').focus();
	  }, 900);
	});


	// Lazy Loading Enhancement for Images
	(function initLazyLoading() {
	  // Check if IntersectionObserver is supported
	  if ('IntersectionObserver' in window) {
	    // Use IntersectionObserver for modern browsers
	    var lazyImageObserver = new IntersectionObserver(function(entries, observer) {
	      entries.forEach(function(entry) {
	        if (entry.isIntersecting) {
	          var lazyImage = entry.target;

	          // Add loaded class for fade-in effect
	          if (lazyImage.complete) {
	            lazyImage.classList.add('loaded');
	          } else {
	            lazyImage.addEventListener('load', function() {
	              lazyImage.classList.add('loaded');
	            });
	          }

	          // Stop observing this image
	          lazyImageObserver.unobserve(lazyImage);
	        }
	      });
	    }, {
	      // Start loading when image is 200px away from viewport
	      rootMargin: '200px'
	    });

	    // Observe all lazy images
	    $('.lazy-image').each(function() {
	      lazyImageObserver.observe(this);
	    });
	  } else {
	    // Fallback for older browsers - load images on scroll
	    var lazyImages = $('.lazy-image');

	    function loadVisibleImages() {
	      lazyImages.each(function() {
	        var $img = $(this);
	        if ($img.hasClass('loaded')) return;

	        var rect = this.getBoundingClientRect();
	        var windowHeight = window.innerHeight || document.documentElement.clientHeight;

	        // Check if image is in viewport (with 200px threshold)
	        if (rect.top <= windowHeight + 200 && rect.bottom >= -200) {
	          if (this.complete) {
	            $img.addClass('loaded');
	          } else {
	            $img.on('load', function() {
	              $(this).addClass('loaded');
	            });
	          }
	        }
	      });
	    }

	    // Initial check
	    loadVisibleImages();

	    // Check on scroll (throttled)
	    var scrollTimeout;
	    $(window).on('scroll', function() {
	      if (scrollTimeout) {
	        clearTimeout(scrollTimeout);
	      }
	      scrollTimeout = setTimeout(loadVisibleImages, 100);
	    });
	  }

	  // Ensure images already loaded (cached) get the 'loaded' class immediately
	  $(window).on('load', function() {
	    $('.lazy-image').each(function() {
	      if (this.complete && !$(this).hasClass('loaded')) {
	        $(this).addClass('loaded');
	      }
	    });
	  });
	})();

})(jQuery);