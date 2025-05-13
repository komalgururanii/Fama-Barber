// Activate AOS animation
AOS.init({
  duration: 1000,
  once: true,
});

// Toggle mobile menu
const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".nav-menu ul");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Basic form submission alert
document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! Your appointment request has been received.");
  this.reset();
});

function redirectToBooking() {
  window.location.href = "#booking";
}
function toggleAnswer(element) {
  const answer = element.nextElementSibling;
  const allAnswers = document.querySelectorAll(".faq-answer");
  allAnswers.forEach((a) => a.classList.remove("show"));
  if (!answer.classList.contains("show")) {
    answer.classList.add("show");
  }
}
function showFAQ(category) {
  const items = document.querySelectorAll(".faq-item");
  items.forEach((item) => {
    if (category === "all" || item.classList.contains(category)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
  const tabs = document.querySelectorAll(".faq-tab");
  tabs.forEach((tab) => tab.classList.remove("active"));
  document
    .querySelector(`[onclick="showFAQ('${category}')"]`)
    .classList.add("active");
}
function searchFAQ(query) {
  const items = document.querySelectorAll(".faq-item");
  items.forEach((item) => {
    const question = item
      .querySelector(".faq-question")
      .innerText.toLowerCase();
    if (question.includes(query.toLowerCase())) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

// Show button after scrolling down 200px
window.onscroll = function () {
  const btn = document.getElementById("backToTop");
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Scroll to top on click
document.getElementById("backToTop").onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
