const artworks = [
    {
      title: "Starry Night",
      artist: "Vincent van Gogh",
      year: 1889,
      image: "images/starry-night.webp",
      style: "Post-Impressionism"
    },
    {
      title: "The Persistence of Memory",
      artist: "Salvador Dalí",
      year: 1931,
      image: "images/persistence-of-memory.webp",
      style: "Surrealism"
    },
    {
      title: "The Birth of Venus",
      artist: "Sandro Botticelli",
      year: 1486,
      image: "images/birth-of-venus.webp",
      style: "Renaissance"
    },
    {
      title: "Composition VIII",
      artist: "Wassily Kandinsky",
      year: 1923,
      image: "images/composition-viii.webp",
      style: "Abstract"
    }
  ];
  
  // Get elements
  const featuredArtDiv = document.getElementById("featured-art");
  const button = document.getElementById("load-featured");
  
  // Render function
  function displayArtwork(artwork) {
    featuredArtDiv.innerHTML = `
      <h3>${artwork.title}</h3>
      <p><strong>Artist:</strong> ${artwork.artist}</p>
      <p><strong>Year:</strong> ${artwork.year}</p>
      <p><strong>Style:</strong> ${artwork.style}</p>
      <img src="${artwork.image}" alt="${artwork.title} by ${artwork.artist}" loading="lazy" />
    `;
  }
  
  // Load last saved artwork if exists
  window.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("featuredArt");
    if (saved) {
      const artwork = JSON.parse(saved);
      displayArtwork(artwork);
    }
  });
  
  // Button click event
  button.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * artworks.length);
    const selected = artworks[randomIndex];
    displayArtwork(selected);
    localStorage.setItem("featuredArt", JSON.stringify(selected));
  });
  
  // Fade-in observer for featured-art
const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fadeObserver.observe(document.getElementById("featured-art"));
