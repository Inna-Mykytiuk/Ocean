$((function(){var l=$("#header"),o=$("#intro").innerHeight(),a=$(window).scrollTop();function e(a){a>=o?l.addClass("fixed"):l.removeClass("fixed")}e(a),$(window).on("scroll",(function(){e(a=$(this).scrollTop())})),$("[data-scroll]").on("click",(function(l){l.preventDefault();var o=$(this),a=o.data("scroll"),e=$(a).offset().top;$("#nav a").removeClass("active"),o.addClass("active"),$("html, body").animate({scrollTop:e},500)})),$("#nav_toggle").on("click",(function(l){l.preventDefault(),$(this).toggleClass("active"),$("#nav").toggleClass("active")})),$("[data-collapse]").on("click",(function(l){l.preventDefault();var o=$(this);o.data("collapse"),o.toggleClass("active")})),$("[data-slider]").slick({infinite:!0,fade:!1,slidesToShow:1,slidesToScroll:1})})),console.log("Hello");
//# sourceMappingURL=index.d8000deb.js.map