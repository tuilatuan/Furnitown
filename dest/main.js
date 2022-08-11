function backTotop() {
  let totop = document.querySelector(".footer__backtotop .text");
  totop.addEventListener("click", function () {
    backtoTop();
  });
  function backtoTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}
backTotop();
function srolltoProduct() {
  let schero = document.querySelector(" .schero");
  let btnshowProduct = document.querySelector(".schero__bottom .logoline");
  btnshowProduct.addEventListener("click", function () {
    window.scrollTo({
      top: schero.clientHeight,
      behavior: "smooth",
    });
  });
}
srolltoProduct();
function showMenu() {
  let btnShowmenu = document.querySelector(".menulogo .btnmenu ");
  let Schero = document.querySelector(".schero .schero__menu");
  let btnExitmenu = document.querySelector(".exit .line ");
  let overlay = document.querySelector(".schero .overlay");

  btnShowmenu.addEventListener("click", function () {
    Schero.classList.add("active");
    gsap.fromTo(
      Schero,
      {
        x: -200,
      },
      { x: 0 }
    );
    overlay.classList.add("active");
  });
  btnExitmenu.addEventListener("click", function () {
    removeActive();
  });
  overlay.addEventListener("click", function () {
    removeActive();
  });
  function removeActive() {
    gsap.fromTo(
      Schero,
      {
        x: 0,
      },
      { x: -100 }
    );
    Schero.classList.remove("active");
    overlay.classList.remove("active");
  }
}
showMenu();
