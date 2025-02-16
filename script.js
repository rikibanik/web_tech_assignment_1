document
  .getElementById("darkModeToggle")
  .addEventListener("change", function () {
    document.body.classList.toggle("dark-mode");
  });

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const getapi = async () => {
  try {
    const response = await fetch(
      "https://api.freeapi.app/api/v1/public/quotes"
    );
    const data = await response.json();

    if (data.success) {
      const quotes = data.data.data;

      let randomIndex = Math.floor(Math.random() * quotes.length);

      document.getElementById("quote").innerHTML = quotes[randomIndex].content;
    } else {
      console.error("Failed to fetch quotes:", data.message);
    }
  } catch (error) {
    console.error("Error fetching quotes:", error);
  }
};

// Call the getapi function when the page loads
window.onload = getapi;
const form = document.getElementById("form");
const namei = document.getElementById("name");
const email = document.getElementById("email");
const query = document.getElementById("query");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (namei.value === "" || email.value === "" || query.value === "") {
    alert("Please fill in all fields!");
  } else {
    alert("Thank you for your query! I will get back to you shortly.");
    namei.value = "";
    email.value = "";
    query.value = "";
  }
});
