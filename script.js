
document.getElementById('darkModeToggle').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); 

        const targetId = this.getAttribute('href'); 
        const targetElement = document.querySelector(targetId);

        if (targetElement) {

            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start' 
            });
        }
    });
});
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


const quotes = [
    "Success is not final; failure is not fatal: it is the courage to continue that counts.",
    "Believe in yourself and all that you are.",
    "Do something today that your future self will thank you for.",
    "Opportunities don't happen, you create them."
];

function generateQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerHTML = quotes[randomIndex];
}
window.onload = generateQuote;

const form = document.getElementById("form");
const namei = document.getElementById("name");
const email = document.getElementById("email");
const query = document.getElementById("query");
form.addEventListener("submit", function(event) {
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