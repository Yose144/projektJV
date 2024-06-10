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
  const slideser = document.querySelector(".slideser");
  const sliderItems = document.querySelectorAll(".slideser-item");

  let isDown = false;
  let startX;
  let scrollLeft;

  slideser.addEventListener("mousedown", (e) => {
    isDown = true;
    slideser.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slideser.scrollLeft;
  });

  slideser.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("active");
  });

  slideser.addEventListener("mouseup", () => {
    isDown = false;
    slideser.classList.remove("active");
  });

  slideser.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; // Speed up scrolling
    slideser.scrollLeft = scrollLeft - walk;
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const passwordInput = document.getElementById("password");
  const showPasswordCheckbox = document.getElementById("showPassword");

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
    alert("Formulář byl odeslán.");
  });
});

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
