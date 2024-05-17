const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "../images/abaNigeria.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "../images/mantiUtah.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "../images/paysonUtah.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "../images/yigoGuam.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "../images/washington.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "../images/limaPeru.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "../images/mexicoCity.jpg"
  },
  {
    templeName: "Melbourne Australia",
    location: "Melbourne, Australia",
    dedicated: "1999, March, 20",
    area: 10700,
    imageUrl:
    "../images/melbourne.jpg"
  },
  {
    templeName: "Hartford Connecticut",
    location: "Farmington, Connecticut",
    dedicated: "2013, August, 17",
    area: 32246,
    imageUrl:
    "../images/hartford.jpg"
  },
  {
    templeName: "Boston Massachusetts",
    location: "Belmont, Massachusetts",
    dedicated: "1997, June, 13",
    area: 69600,
    imageUrl:
    "../images/boston.jpg"
  }
];

function createTempleCard(temples, selector) {
  const container = document.getElementById('templeElements');
  container.innerHTML = '';

  temples.forEach(temple => {
      const templeCard = document.createElement("div");
      templeCard.classList.add("temple-card");

      let name = document.createElement("h3");
      let location = document.createElement("p");
      let dedication = document.createElement("p");
      let area = document.createElement("p");
      let image = document.createElement("img");

      name.textContent = temple.templeName;
      location.innerHTML = `<strong>Location:</strong> ${temple.location}`;
      dedication.innerHTML = `<strong>Dedication Date:</strong> ${temple.dedicated}`;
      area.innerHTML = `<strong>Area:</strong> ${temple.area} sq ft`;
      image.setAttribute("src", `${temple.imageUrl}`);
      image.setAttribute("alt", `${temple.templeName}`);
      image.setAttribute("loading", "lazy");
      image.setAttribute("width", 400);
      image.setAttribute("height", 250);

      templeCard.appendChild(name);
      templeCard.appendChild(location);
      templeCard.appendChild(dedication);
      templeCard.appendChild(area);
      templeCard.appendChild(image);

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