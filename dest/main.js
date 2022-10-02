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

function showmenuDesktop() {
  let btnShowmenu = document.querySelector(".menulogo .btnmenu");
  let Schero = document.querySelector(".menuhiden .menuhiden__menu");
  let btnExitmenu = document.querySelector(".exit .line ");
  let overlay = document.querySelector(".menuhiden .overlay");

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
  window.addEventListener("scroll", function () {
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
showmenuDesktop();
function showmenuMobile() {
  let btnShowmobile = document.querySelector(".header__hiden .line ");
  let Schero = document.querySelector(".menuhiden .menuhiden__menu");
  let overlay = document.querySelector(".menuhiden .overlay");
  btnShowmobile.addEventListener("click", function () {
    btnShowmobile.classList.toggle("active");
    Schero.classList.toggle("active");
    overlay.classList.toggle("active");
    gsap.fromTo(
      Schero,
      {
        y: -300,
      },
      { y: 0 }
    );
  });
}
showmenuMobile();

function srolltoProduct() {
  let schero = document.querySelector(".schero");
  let btnshowProduct = document.querySelector(" .logoline");
  btnshowProduct.addEventListener("click", function () {
    window.scrollTo({
      top: schero.clientHeight,
      behavior: "smooth",
    });
  });
}
srolltoProduct();
