window.addEventListener("DOMContentLoaded", () => {
    let count = parseInt(localStorage.getItem("reviewCount")) || 0;
    count++;
    localStorage.setItem("reviewCount", count);
  
    const display = document.getElementById("review-count");
    if (display) {
      display.textContent = `You've submitted ${count} review${count === 1 ? '' : 's'}.`;
    }
  });
  