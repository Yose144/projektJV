const switcher = document.querySelector(".switch input");
const themeText = document.querySelector(".switcher-description p");
const themeIcon = document.querySelector(".switcher-description i");

// Functions
const darkMode = () => {
  themeText.textContent = "Dark Mode";
  themeIcon.classList.replace("fa-sun", "fa-moon");
};

const lightMode = () => {
  themeText.textContent = "Light Mode";
  themeIcon.classList.replace("fa-moon", "fa-sun");
};

const switchTheme = (event) => {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    darkMode();
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    lightMode();
  }
};

switcher.addEventListener("change", switchTheme);

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".slider");
  const sliderItems = document.querySelectorAll(".slider-item");

  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("active");
  });

  slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("active");
  });

  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; // Speed up scrolling
    slider.scrollLeft = scrollLeft - walk;
  });

  const passwordInput = document.getElementById("password");
  const showPasswordCheckbox = document.getElementById("showPassword");
  const errorMessage = document.getElementById("error-message");

  showPasswordCheckbox.addEventListener("change", () => {
    if (showPasswordCheckbox.checked) {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  });

  const form = document.getElementById("passwordForm");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    errorMessage.textContent = ""; // Clear previous error message
    const password = passwordInput.value;
    if (validatePassword(password)) {
      alert("Formulář byl odeslán.");
    }
  });

  const validatePassword = (password) => {
    const minLength = 8;
    const hasNumber = /\d/;
    const hasUpperCase = /[A-Z]/;
    const hasLowerCase = /[a-z]/;

    if (password.length < minLength) {
      errorMessage.textContent = "Heslo musí mít alespoň 8 znaků.";
      return false;
    }
    if (!hasNumber.test(password)) {
      errorMessage.textContent = "Heslo musí obsahovat alespoň jedno číslo.";
      return false;
    }
    if (!hasUpperCase.test(password)) {
      errorMessage.textContent = "Heslo musí obsahovat alespoň jedno velké písmeno.";
      return false;
    }
    if (!hasLowerCase.test(password)) {
      errorMessage.textContent = "Heslo musí obsahovat alespoň jedno malé písmeno.";
      return false;
    }
    return true;
  };

  // Get the button
  let mybutton = document.getElementById("scrollToTopBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  mybutton.addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
});
