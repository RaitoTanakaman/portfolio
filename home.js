$(function () {
    $('.coding ul li h3').on('click', function () {
        $('.coding ul li p').css('display', 'block');
    }) 
});





$(".header-circle").on("click", function () {
  if ($(".header-circle").hasClass("header-circle-off")) {
    $(".header-circle")
    .removeClass("header-circle-off")
    .addClass("header-circle-on");
    $(".header-menu").delay(1500).fadeIn();
    
    $("html").css("overflow", "hidden");
  } else if ($(".header-circle").hasClass("header-circle-on")) {
    setTimeout(function(){

      $(".header-circle")
      .removeClass("header-circle-on")
      .addClass("header-circle-off");
    },500)
    $(".header-menu").fadeOut();
    $("html").css("overflow", "");
  } else {
    $(".header-circle").addClass("header-circle-on");
    $(".header-menu").delay(1500).fadeIn();
    $("html").css("overflow", "hidden");
  }
});



$(".works ul li").hover(
  function () {
    $(this).find("div").fadeIn(300);
    $(this).css("filter", "none");
  },
  function () {
    $(this).find("div").fadeOut(300);
    $(this).css("filter", "drop-shadow(10px 10px 10px rgba(0,0,0,0.4))");
  }
);



$(function () {
  $(".service-box ul li").on("click", function () {
    const self = $(this);
    const children = self.children("p");
    if (children.hasClass("service-off")) {
      self
        .find("span")
        .html(
          '<i class="fa-solid fa-xmark" style="margin-right: 3px;"></i>'
        );
      children.slideDown(300);
      children.addClass("service-on").removeClass("service-off");
    } else {
      self.find("span").html('<i class="fa-solid fa-chevron-down"></i>');
      children.slideUp(300);
      children.addClass("service-off").removeClass("service-on");
    }
  });
});





// Jump Page Animation
const wrapper = document.querySelector('.wrapper');
const pageTransitionDOMClass = 'jsPageTransition';
const linkEls = [
  document.querySelectorAll('a:not([href*="#"]):not([target])'),
  document.querySelectorAll('.jsPageTransition'),
]
const currentHostName = window.location.hostname;

function addFadeOut(url) {
  wrapper.classList.add('fadeout');
  setTimeout(() => {
    window.location = url;
    
  }, 300);
}

linkEls.forEach((linkEl) => {
  linkEl.addEventListener("click", (e) => {
    if ((e.ctrlKey && !e.metaKey) || (!e.ctrlKey && e.metaKey)) return;
  })
})
