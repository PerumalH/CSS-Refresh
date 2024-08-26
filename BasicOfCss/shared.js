var backdrop = document.querySelector(".backdrop");
var PlanButton = document.querySelectorAll(".plan button");
var modal = document.querySelector(".modal");
var modalButton = document.querySelector(".modal .modal__action--negative");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");
// backdrop.style.display = "block";
for (var i = 0; i < PlanButton.length; i++) {
  PlanButton[i].addEventListener("click", function () {
    // backdrop.style.display = "block";
    // modal.style.display = "block";
    // modal.className = "open"; // this will actually overwrite the complete class list
    modal.classList.add("open");
    backdrop.classList.add("open");
  });
}
backdrop.addEventListener("click", function () {
  // backdrop.style.display = "none";
  // modal.style.display = "none";
  // mobileNav.style.display = "none";
  mobileNav.classList.remove("open");

  closeModel();
});
if (modalButton) {
  modalButton.addEventListener("click", closeModel);
}

function closeModel() {
  // backdrop.style.display = "none";
  // modal.style.display = "none";
  if (modal) {
    modal.classList.remove("open");
  }

  backdrop.classList.remove("open");
}
toggleButton.addEventListener("click", function () {
  // mobileNav.style.display = "block";
  // backdrop.style.display = "block";
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
});
