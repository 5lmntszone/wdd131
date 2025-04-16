const artists = [
    {
      name: "Frida Kahlo",
      portrait: "images/frida.webp",
      style: "Surrealism / Magical Realism",
      bio: "Frida Kahlo was a Mexican painter known for her powerful self-portraits and exploration of identity, pain, and indigenous culture.",
      notableWork: "The Two Fridas (1939)",
      quote: "I paint self-portraits because I am so often alone, because I am the person I know best."
    },
    {
      name: "Vincent van Gogh",
      portrait: "images/van-gogh.webp",
      style: "Post-Impressionism",
      bio: "Dutch artist known for his expressive use of color and emotive brushwork. Despite his struggles, he produced over 2,000 artworks.",
      notableWork: "Starry Night (1889)",
      quote: "I dream my painting and I paint my dream."
    },
    {
      name: "Pablo Picasso",
      portrait: "images/picasso.webp",
      style: "Cubism / Modern Art",
      bio: "A Spanish painter and sculptor, Picasso is considered one of the most influential artists of the 20th century.",
      notableWork: "Guernica (1937)",
      quote: "Everything you can imagine is real."
    },
    {
      name: "Georgia O’Keeffe",
      portrait: "images/okeeffe.webp",
      style: "Modernism",
      bio: "American modernist known for her large-scale flower paintings and desert landscapes that captured the spirit of the American Southwest.",
      notableWork: "Jimson Weed (1936)",
      quote: "I found I could say things with color and shapes that I couldn’t say any other way."
    }
  ];
  
  function renderArtists() {
    const container = document.getElementById("artists-container");
    artists.forEach((artist) => {
      const card = document.createElement("div");
      card.classList.add("artist-card");
      card.innerHTML = `
      <img src="${artist.portrait}" alt="${artist.name} portrait" loading="lazy">
      <div class="info">
        <h3>${artist.name}</h3>
        <p><strong>Style:</strong> ${artist.style}</p>
        <p>${artist.bio}</p>
        <p><strong>Notable Work:</strong> ${artist.notableWork}</p>
        <blockquote>“${artist.quote}”</blockquote>
      </div>
    `;
      container.appendChild(card);
    });
  }
  
  document.addEventListener("DOMContentLoaded", renderArtists);

  // Fade-in on scroll using IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target); // Optional: animate only once
    }
  });
}, { threshold: 0.1 });

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".artist-card");
  cards.forEach(card => observer.observe(card));
});

  