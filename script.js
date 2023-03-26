document.addEventListener("DOMContentLoaded", function(event) {
  var header = document.querySelector(".parallax");
  var scrollHeight = header.offsetHeight;
  var windowHeight = window.innerHeight;
  var percentage = Math.round(scrollHeight / windowHeight * 100);

  window.addEventListener("scroll", function() {
    var scrollTop = window.pageYOffset;
    var offset = scrollTop / scrollHeight * 100;
    header.style.backgroundPositionY = offset * percentage / 100 + "%";
  });
});