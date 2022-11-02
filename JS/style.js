$(document).ready(function(){
  $(".speaker-img-first").hover(function(){
    $(".event-speakers-last").css("margin-top","0vw");
  },function(){
    $(".event-speakers-last").css("margin-top","2.4vw");
  });

  $(".img-desc-bar-first").hover(function(){
    $(".event-speakers-last").css("margin-top","0vw");
  },function(){
    $(".event-speakers-last").css("margin-top","2.4vw");
  });

  $(".speaker-img-last").hover(function(){
    $(".venue-content").css("margin-top","0vw");
  },function(){
    $(".venue-content").css("margin-top","2.4vw");
  });

  $(".img-desc-bar-last").hover(function(){
    $(".venue-content").css("margin-top","0vw");
  },function(){
    $(".venue-content").css("margin-top","2.4vw");
  });
});
