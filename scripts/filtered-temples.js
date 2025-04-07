document.addEventListener("DOMContentLoaded", function () {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const navMenu = document.querySelector(".navigation");

  hamburgerBtn.addEventListener("click", function () {
    navMenu.classList.toggle("show");
    hamburgerBtn.textContent = navMenu.classList.contains("show") ? "✖" : "☰";
  });
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Salta Argentina Temple",
    location: "Salta, Argentina",
    dedicated: "2024, June, 16",
    area: 27000,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/salta-argentina-temple/salta-argentina-temple-48241-main.jpg"
  },
  {
    templeName: "Snowflake Arizona Temple",
    location: "Arizona, United States",
    dedicated: "2002, March, 3",
    area: 18621,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/snowflake-arizona-temple/snowflake-arizona-temple-46560-main.jpg"
  },
  {
    templeName: "Laie Hawaii Temple",
    location: "Hawaii, United States",
    dedicated: "1919, November, 27-30",
    area: 42100,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/laie-hawaii-temple/laie-hawaii-temple-7370-main.jpg"
  }
];

const album = document.querySelector('.album');
const navLinks = document.querySelectorAll('.navigation a');

function clearTemples() {
  album.innerHTML = '';
}

function displayTemples(filteredTemples) {
  clearTemples();

  filteredTemples.forEach((temple) => {
    const card = document.createElement('div');
    card.classList.add('temple-card');

    const name = document.createElement('h3');
    name.textContent = temple.templeName;

    const location = document.createElement('p');
    location.textContent = `Location: ${temple.location}`;

    const dedicated = document.createElement('p');
    dedicated.textContent = `Dedicated: ${temple.dedicated}`;

    const area = document.createElement('p');
    area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;

    const image = document.createElement('img');
    image.src = temple.imageUrl;
    image.alt = `Image of ${temple.templeName}`;
    image.loading = "lazy";

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(image);

    album.appendChild(card);
  });
}

displayTemples(temples);

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const filter = link.textContent.trim().toLowerCase();
    let filteredTemples = [];

    switch (filter) {
      case 'home':
        filteredTemples = temples;
        break;
      case 'old':
        filteredTemples = temples.filter(t => {
          const year = parseInt(t.dedicated.split(',')[0]);
          return year < 1900;
        });
        break;
      case 'new':
        filteredTemples = temples.filter(t => {
          const year = parseInt(t.dedicated.split(',')[0]);
          return year > 2000;
        });
        break;
      case 'large':
        filteredTemples = temples.filter(t => t.area > 90000);
        break;
      case 'small':
        filteredTemples = temples.filter(t => t.area < 10000);
        break;
    }

    displayTemples(filteredTemples);
  });
});
