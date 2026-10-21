

const map = document.getElementById("map");

let isDragging = false;
let startX;
let startY;
let currentX = 0;
let currentY = 0;

/* Souris enfoncée */
map.addEventListener("mousedown", (e) => {

  isDragging = true;
  startX = e.clientX - currentX;
  startY = e.clientY - currentY;
});

/* Déplacement souris */

document.addEventListener("mousemove", (e) => {

  if (!isDragging) return;

  currentX = e.clientX - startX;
  currentY = e.clientY - startY;

  map.style.transform =
    `translate(${currentX}px, ${currentY}px)`;

});

/* Relâchement souris */

document.addEventListener("mouseup", () => {

  isDragging = false;

});


//les markers
const markers =
  document.querySelectorAll(".marker");

/* Panneau infos */

const infoTitle =
  document.getElementById("info-title");

const infoImage =
  document.getElementById("info-image");

const infoDescription =
  document.getElementById("info-description");

/* Pour chaque marqueur */

markers.forEach(marker => {

  marker.addEventListener("click", () => {

    /* Récupération données */

    const title =
      marker.dataset.title;

    const image =
      marker.dataset.image;

    const description =
      marker.dataset.description;

    /* Injection dans le panneau */

    infoTitle.textContent =
      title;

    infoImage.src =
      image;

    infoDescription.textContent =
      description;
      
    document.querySelector(".info-panel").classList.add("visible");
    
  });

});