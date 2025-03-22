document.addEventListener("DOMContentLoaded", function () {
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const navMenu = document.querySelector(".navigation");

    hamburgerBtn.addEventListener("click", function () {
        navMenu.classList.toggle("show"); // Toggle menu visibility

        // Change button symbol (☰ for open, ✖ for close)
        if (navMenu.classList.contains("show")) {
            hamburgerBtn.textContent = "✖"; // Close icon
        } else {
            hamburgerBtn.textContent = "☰"; // Menu icon
        }
    });
});
