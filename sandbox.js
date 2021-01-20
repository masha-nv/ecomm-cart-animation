$("button").on("click", function () {
  scrollTo(0, 0);
  $(this).closest("div").find("img").clone().addClass("zoom").appendTo("body");
  setTimeout(function () {
    $(".zoom").remove();
  }, 2000);
});
