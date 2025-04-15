const styles = [
    {
      name: "Renaissance",
      description:
        "A period of revival in classical learning and wisdom, emphasizing balance, symmetry, and realism.",
      image: "images/birth-of-venus.jpg"
    },
    {
      name: "Impressionism",
      description:
        "Focused on light, color, and everyday subjects with visible brush strokes and soft edges.",
      image: "images/impression-sunrise.jpg"
    },
    {
      name: "Surrealism",
      description:
        "Blends dreamlike imagery and the subconscious, often with unexpected or bizarre elements.",
      image: "images/the-false-mirror.jpg"
    },
    {
      name: "Abstract",
      description:
        "Does not represent external reality directly, but instead uses shapes, colors, and forms for expression.",
      image: "images/caoutchouc.webp"
    }
  ];
  
  function renderStyles() {
    const container = document.getElementById("styles-container");
    styles.forEach((style) => {
      const card = document.createElement("div");
      card.classList.add("style-card");
      card.innerHTML = `
        <h3>${style.name}</h3>
        <p>${style.description}</p>
        <img src="${style.image}" alt="${style.name} example" loading="lazy">
      `;
      container.appendChild(card);
    });
  }
  
  document.addEventListener("DOMContentLoaded", renderStyles);
  