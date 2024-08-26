
$(function(){
  $('a[href^="#"]').click(function(){
    var adjust = -140;
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top + adjust;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});

$(".nav-btn-ch,.nav-list,.nav-link").click(function(){
$(".nav-line-center").fadeToggle();
});

  $(function(){
    $(".nav-btn-ch,.nav-list,.nav-link").on("click",function(){
       $(".nav-line-over").toggleClass("open-over");
    });
  });
  $(function(){
    $(".nav-btn-ch,.nav-list,.nav-link").on("click",function(){
       $(".nav-line-under").toggleClass("open-under");
    });
  });
  $(function(){
    $(".nav-btn-ch,.nav-list,.nav-link").on("click",function(){
       $("header").toggleClass("open-header");
    });
  });
  
  $(function(){
    $(".nav-btn-ch,.nav-item,.nav-link").on("click",function(){
       $(".nav-item").fadeToggle(0);
    });
  });



  $(function () {
    $(window).scroll(function () {
      const windowHeight = $(window).height();
      const scroll = $(window).scrollTop();
  
      $('.dot-li,.number-li,.dot-li-ch,p,.body-text,hr,.column-1,.column-2,.column-3,.container,.img-about,.h2-div,.h2-line,.h3-div,.h3-no,h4,input,label,ol').each(function () {
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 100) {
          $(this).addClass("is-fadein");
        }
      });
    });
  });
  
  