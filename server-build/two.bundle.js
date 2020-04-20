/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/mix.js":
/*!***********************!*\
  !*** ./public/mix.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("if (typeof AOS != undefined) {\n  console.log(\"AOS\", AOS, jQuery);\n  AOS.init({\n    duration: 800,\n    easing: 'slide'\n  });\n\n  (function ($) {\n    \"use strict\";\n\n    $(window).stellar({\n      responsive: true,\n      parallaxBackgrounds: true,\n      parallaxElements: true,\n      horizontalScrolling: false,\n      hideDistantElements: false,\n      scrollProperty: 'scroll'\n    });\n\n    var fullHeight = function () {\n      $('.js-fullheight').css('height', $(window).height());\n      $(window).resize(function () {\n        $('.js-fullheight').css('height', $(window).height());\n      });\n    };\n\n    fullHeight(); // loader\n\n    var loader = function () {\n      setTimeout(function () {\n        if ($('#ftco-loader').length > 0) {\n          $('#ftco-loader').removeClass('show');\n        }\n      }, 1);\n    };\n\n    loader(); // Scrollax\n\n    $.Scrollax(); // Burger Menu\n\n    var burgerMenu = function () {\n      $('body').on('click', '.js-fh5co-nav-toggle', function (event) {\n        event.preventDefault();\n\n        if ($('#ftco-nav').is(':visible')) {\n          $(this).removeClass('active');\n        } else {\n          $(this).addClass('active');\n        }\n      });\n    };\n\n    burgerMenu();\n\n    var onePageClick = function () {\n      $(document).on('click', '#ftco-nav a[href^=\"#\"]', function (event) {\n        event.preventDefault();\n        var href = $.attr(this, 'href');\n        $('html, body').animate({\n          scrollTop: $($.attr(this, 'href')).offset().top - 70\n        }, 500, function () {// window.location.hash = href;\n        });\n      });\n    };\n\n    onePageClick();\n\n    var carousel = function () {\n      $('.home-slider').owlCarousel({\n        loop: true,\n        autoplay: true,\n        margin: 0,\n        animateOut: 'fadeOut',\n        animateIn: 'fadeIn',\n        nav: false,\n        autoplayHoverPause: false,\n        items: 1,\n        navText: [\"<span class='ion-md-arrow-back'></span>\", \"<span class='ion-chevron-right'></span>\"],\n        responsive: {\n          0: {\n            items: 1\n          },\n          600: {\n            items: 1\n          },\n          1000: {\n            items: 1\n          }\n        }\n      });\n    };\n\n    carousel();\n    $('nav .dropdown').hover(function () {\n      var $this = $(this); // \t timer;\n      // clearTimeout(timer);\n\n      $this.addClass('show');\n      $this.find('> a').attr('aria-expanded', true); // $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');\n\n      $this.find('.dropdown-menu').addClass('show');\n    }, function () {\n      var $this = $(this); // timer;\n      // timer = setTimeout(function(){\n\n      $this.removeClass('show');\n      $this.find('> a').attr('aria-expanded', false); // $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');\n\n      $this.find('.dropdown-menu').removeClass('show'); // }, 100);\n    });\n    $('#dropdown04').on('show.bs.dropdown', function () {\n      console.log('show');\n    }); // scroll\n\n    var scrollWindow = function () {\n      $(window).scroll(function () {\n        var $w = $(this),\n            st = $w.scrollTop(),\n            navbar = $('.ftco_navbar'),\n            sd = $('.js-scroll-wrap');\n\n        if (st > 150) {\n          if (!navbar.hasClass('scrolled')) {\n            navbar.addClass('scrolled');\n          }\n        }\n\n        if (st < 150) {\n          if (navbar.hasClass('scrolled')) {\n            navbar.removeClass('scrolled sleep');\n          }\n        }\n\n        if (st > 350) {\n          if (!navbar.hasClass('awake')) {\n            navbar.addClass('awake');\n          }\n\n          if (sd.length > 0) {\n            sd.addClass('sleep');\n          }\n        }\n\n        if (st < 350) {\n          if (navbar.hasClass('awake')) {\n            navbar.removeClass('awake');\n            navbar.addClass('sleep');\n          }\n\n          if (sd.length > 0) {\n            sd.removeClass('sleep');\n          }\n        }\n      });\n    };\n\n    scrollWindow();\n\n    var counter = function () {\n      $('#section-counter, .hero-wrap, .ftco-counter').waypoint(function (direction) {\n        if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {\n          var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');\n          $('.number').each(function () {\n            var $this = $(this),\n                num = $this.data('number');\n            console.log(num);\n            $this.animateNumber({\n              number: num,\n              numberStep: comma_separator_number_step\n            }, 7000);\n          });\n        }\n      }, {\n        offset: '95%'\n      });\n    };\n\n    counter();\n\n    var contentWayPoint = function () {\n      var i = 0;\n      $('.ftco-animate').waypoint(function (direction) {\n        if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {\n          i++;\n          $(this.element).addClass('item-animate');\n          setTimeout(function () {\n            $('body .ftco-animate.item-animate').each(function (k) {\n              var el = $(this);\n              setTimeout(function () {\n                var effect = el.data('animate-effect');\n\n                if (effect === 'fadeIn') {\n                  el.addClass('fadeIn ftco-animated');\n                } else if (effect === 'fadeInLeft') {\n                  el.addClass('fadeInLeft ftco-animated');\n                } else if (effect === 'fadeInRight') {\n                  el.addClass('fadeInRight ftco-animated');\n                } else {\n                  el.addClass('fadeInUp ftco-animated');\n                }\n\n                el.removeClass('item-animate');\n              }, k * 50, 'easeInOutExpo');\n            });\n          }, 100);\n        }\n      }, {\n        offset: '95%'\n      });\n    };\n\n    contentWayPoint(); // magnific popup\n\n    $('.image-popup').magnificPopup({\n      type: 'image',\n      closeOnContentClick: true,\n      closeBtnInside: false,\n      fixedContentPos: true,\n      mainClass: 'mfp-no-margins mfp-with-zoom',\n      // class to remove default margin from left and right side\n      gallery: {\n        enabled: true,\n        navigateByImgClick: true,\n        preload: [0, 1] // Will preload 0 - before current, and 1 after the current image\n\n      },\n      image: {\n        verticalFit: true\n      },\n      zoom: {\n        enabled: true,\n        duration: 300 // don't foget to change the duration also in CSS\n\n      }\n    });\n    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({\n      disableOn: 700,\n      type: 'iframe',\n      mainClass: 'mfp-fade',\n      removalDelay: 160,\n      preloader: false,\n      fixedContentPos: false\n    });\n\n    function makeTimer() {\n      var endTime = new Date(\"21 December 2019 9:56:00 GMT+01:00\");\n      endTime = Date.parse(endTime) / 1000;\n      var now = new Date();\n      now = Date.parse(now) / 1000;\n      var timeLeft = endTime - now;\n      var days = Math.floor(timeLeft / 86400);\n      var hours = Math.floor((timeLeft - days * 86400) / 3600);\n      var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);\n      var seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);\n\n      if (hours < \"10\") {\n        hours = \"0\" + hours;\n      }\n\n      if (minutes < \"10\") {\n        minutes = \"0\" + minutes;\n      }\n\n      if (seconds < \"10\") {\n        seconds = \"0\" + seconds;\n      }\n\n      $(\"#days\").html(days + \"<span>Days</span>\");\n      $(\"#hours\").html(hours + \"<span>Hours</span>\");\n      $(\"#minutes\").html(minutes + \"<span>Minutes</span>\");\n      $(\"#seconds\").html(seconds + \"<span>Seconds</span>\");\n    }\n\n    setInterval(function () {\n      makeTimer();\n    }, 1000);\n  })(jQuery);\n}\n\n//# sourceURL=webpack:///./public/mix.js?");

/***/ }),

/***/ 1:
/*!*****************************!*\
  !*** multi ./public/mix.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./public/mix.js */\"./public/mix.js\");\n\n\n//# sourceURL=webpack:///multi_./public/mix.js?");

/***/ })

/******/ });