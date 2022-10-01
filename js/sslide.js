function slideProductdetail() {
  var elem = document.querySelector(".imgs");
  var flkty = new Flickity(".imgs", {
    cellAlign: "left",
    contain: true,
    wrapAround: true,
    prevNextButtons: false,
    fullscreen: true,
  });
  var previousButton = document.querySelector(".nextprev .prev");
  previousButton.addEventListener("click", function (e) {
    e.preventDefault();

    flkty.previous();
  });
  var nextButton = document.querySelector(".nextprev .next");
  nextButton.addEventListener("click", function (e) {
    e.preventDefault();
    flkty.next();
  });
  var btnfullscreen = document.querySelector(".listbtn .zoom");
  btnfullscreen.addEventListener("click", function () {
    console.log(1);
    flkty.viewFullscreen();
  });
}
slideProductdetail();
