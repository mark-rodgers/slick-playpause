(function($) {
  $(".slick").on("init", function(event, slick) {
    if(!slick.options.arrows) return;
    $(".slick-initialized .slick-list").after('<button class="slick-pause" aria-label="Pause" type="button" style="display: block;">Pause</button>');
    $(".slick-initialized .slick-pause").attr("data-autoplay", slick.options.autoplay);
    $(".slick-initialized .slick-pause").click(function(event) {
      var autoplay = JSON.parse($(event.target).attr("data-autoplay"));
      if(autoplay) {
        slick.paused = true;
        $(".slick-initialized .slick-pause").attr("data-autoplay", false);
      }
      else {
        slick.paused = false;
        slick.$nextArrow.click();
        $(".slick-initialized .slick-pause").attr("data-autoplay", true);
      }
    });
  });
})(jQuery);
