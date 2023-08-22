import "./assets/scss/all.scss";
// import "bootstrap/dist/js/bootstrap.min.js";
import * as bootstrap from "bootstrap/dist/js/bootstrap.min.js";
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs";

// swiper
// ---------------------------------------
const swiper = new Swiper(".swiper", {
  allowTouchMove: false,

  slidesPerView: "auto",

  speed: 10000,

  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },

  loop: true,
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

// registerModal
// ----------------------------------------
const myModal = new bootstrap.Modal(document.getElementById("registerModal"));
const regModalBtns = document.querySelectorAll(".regModalBtn");

regModalBtns.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    // e.stopPropagation();
    myModal.show();
  });
});
