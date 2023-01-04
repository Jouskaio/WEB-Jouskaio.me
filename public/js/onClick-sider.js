// Bind function is used to wait for the page to finish loading before executing

  $(document).ready(function() {
    $(window).bind('load', function()
      {
      // Handler for .ready() called.
      $(":root").attr("data-theme", "dark");
        $(".l-background__lines").removeClass("hidden");
      $(".m-sideGlobal__icon--modeChanger").click(function () {
        if ($(":root").attr("data-theme") === "light") {
          $(":root").attr("data-theme", "dark")
          //$(".l-background__lines").addClass("hidden");
          $(".l-background__lines").css("background: rgba(255, 255, 255, 0.1);")

        } else {
          $(":root").attr("data-theme", "light")
          //$(".l-background__lines").removeClass("hidden");
          $(".l-background__lines").css("background: hsla(0, 11%, 2%, .2);")
        }
      })
  });
});
