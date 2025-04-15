const styles = [
  {
    name: "Renaissance",
    description: "A revival of classical art, emphasizing realism, humanism, and perspective.",
    image: "images/birth-of-venus.jpg",
    category: "Renaissance"
  },
  {
    name: "Impressionism",
    description: "Captures the impression of a moment through light, color, and loose brushwork.",
    image: "images/impression-sunrise.jpg",
    category: "Impressionism"
  },
  {
    name: "Surrealism",
    description: "Blends dream and reality with illogical scenes and symbolic imagery.",
    image: "images/the-false-mirror.jpg",
    category: "Surrealism"
  },
  {
    name: "Abstract",
    description: "Uses color, shape, and form to express emotion without depicting real objects.",
    image: "images/caoutchouc.webp",
    category: "Abstract"
  }
];

// Render style cards
function renderStyles(filtered = styles) {
  const container = document.getElementById("styles-container");
  container.innerHTML = "";

  filtered.forEach((style) => {
    const card = document.createElement("div");
    card.classList.add("style-card");
    card.innerHTML = `
      <img src="${style.image}" alt="${style.name}" loading="lazy">
      <h3>${style.name}</h3>
      <p>${style.description}</p>
    `;
    container.appendChild(card);
    observer.observe(card);
  });
}

// Category filter buttons
const buttons = document.querySelectorAll(".filter-buttons button");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const selected = button.getAttribute("data-style");
    if (selected === "all") {
      renderStyles(styles);
    } else {
      const filtered = styles.filter(s => s.category === selected);
      renderStyles(filtered);
    }
  });
});

// Fade-in on scroll animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

// Load cards on DOM ready
window.addEventListener("DOMContentLoaded", () => renderStyles());
