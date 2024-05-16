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
    templeName: "Melbourne Australia",
    location: "Melbourne, Australia",
    dedicated: "1999, March, 20",
    area: 10700,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/melbourne-australia/400x250/melbourne-australia-temple-lds-1025169-wallpaper.jpg"
  },
  {
    templeName: "Hartford Connecticut",
    location: "Farmington, Connecticut",
    dedicated: "2013, August, 17",
    area: 32246,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/hartford-connecticut/2018/400x250/Hartford-Temple01.jpg"
  },
  {
    templeName: "Boston Massachusetts",
    location: "Belmont, Massachusetts",
    dedicated: "1997, June, 13",
    area: 69600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/boston-massachusetts/400x250/boston-temple-lds-945541-wallpaper.jpg"
  }
];

function createTempleCard(temples, selector) {
  const container = document.getElementById('templeElements');
  container.innerHTML = '';

  temples.forEach(temple => {
      const templeCard = document.createElement("div");
      templeCard.classList.add("temple-card");

      templeCard.innerHTML = `
          <h3>${temple.templeName}</h3>
          <p><strong>Location:</strong> ${temple.location}</p>
          <p><strong>Dedication Date:</strong> ${temple.dedicated}</p>
          <p><strong>Area:</strong> ${temple.area} sq ft</p>
          <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
      `;

      if (selector === "home") {
          container.appendChild(templeCard);
      } else if (selector === "old") {
          if (parseInt(temple.dedicated.substring(0, 4)) < 1900) {
              container.appendChild(templeCard);
          }
      } else if (selector === "new") {
          if (parseInt(temple.dedicated.substring(0, 4)) > 2000) {
              container.appendChild(templeCard);
          }
      } else if (selector === "large") {
          if (temple.area > 90000) {
              container.appendChild(templeCard);
          }
      } else if (selector === "small") {
          if (temple.area < 10000) {
              container.appendChild(templeCard);
          }
      }
  });
}

createTempleCard(temples, "home");

const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");

oldLink.addEventListener("click", () => {
  document.getElementById("selectedContent").textContent = "Old Temples";
  createTempleCard(temples, "old");
});

newLink.addEventListener("click", () => {
  document.getElementById('templeElements').innerHTML = '';
  document.getElementById("selectedContent").textContent = "New Temples";
  createTempleCard(temples, "new");
});

largeLink.addEventListener("click", () => {
  document.getElementById('templeElements').innerHTML = '';
  document.getElementById("selectedContent").textContent = "Large Temples";
  createTempleCard(temples, "large");
});

smallLink.addEventListener("click", () => {
  document.getElementById('templeElements').innerHTML = '';
  document.getElementById("selectedContent").textContent = "Small Temples";
  createTempleCard(temples, "small");
});

// Hamburger Menu Js
function myFunction() {
    var x = document.getElementById("menu");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
};

// Footer Js
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = "Last modified: " + document.lastModified;