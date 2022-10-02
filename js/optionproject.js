function seclectOption() {
  let btnSelect = document.querySelector(".btndisplay ");
  let projectCurrent = document.querySelector(".btndisplay .text");
  let listOption = document.querySelector(".listoption");
  let Option = document.querySelectorAll(".listoption li");
  btnSelect.addEventListener("click", function () {});
  function addClass() {
    listOption.classList.toggle("active");
  }
  btnSelect.addEventListener("click", function (e) {
    e.stopPropagation();
    addClass();
  });
  Option.forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      let langtext = item.textContent;
      let langCurrentspan = projectCurrent.textContent;
      projectCurrent.innerHTML = langtext;
      item.innerHTML = langCurrentspan;
    });
  });
  document.addEventListener("click", function () {
    listOption.classList.remove("active");
  });
}
seclectOption();
