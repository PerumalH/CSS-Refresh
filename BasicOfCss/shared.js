var backdrop = document.querySelector(".backdrop");
var PlanButton = document.querySelectorAll(".plan button");
var modal = document.querySelector(".modal");
var modalButton = document.querySelector(".modal .modal__action--negative");

// backdrop.style.display = "block";
for (var i = 0; i < PlanButton.length; i++) {
  PlanButton[i].addEventListener("click", function () {
    backdrop.style.display = "block";
    modal.style.display = "block";
  });
}
modalButton.addEventListener("click", function () {
  backdrop.style.display = "none";
  modal.style.display = "none";
});
