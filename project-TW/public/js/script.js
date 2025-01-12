function updateDateTime() {
  const now = new Date();
  const datetime = now.toLocaleString();
  document.getElementById("datetime").textContent = datetime;
}
function toggleNavbar() {
  // - [ ] manipularea DOM-ului (selectare după id, tag, clasă, folosind selectori CSS)
  const links = document.querySelector(".navbar-links");
  //- [x] folosirea proprietăților classList, target sau currentTarget
  links.classList.toggle("active");
}

function wowFunction() {
  //- [ ] modificarea stilului unui element sau al unui grup de elemente
  const wowBtn = document.getElementById("wowbtn");
  wowBtn.style.padding = "4rem";
  wowBtn.style.fontSize = "1.4rem";
}

//mini gme
const matrix = document.getElementById("matrix");
const gymBtn = document.getElementById("gym-btn");

// Create a 5x5 matrix of 🦠
function createMatrix() {
  matrix.innerHTML = "";
  for (let i = 0; i < 25; i++) {
    // - [ ] crearea și stergerea de elemente HTML
    const cell = document.createElement("div");
    cell.textContent = "🦠";
    cell.classList.add("cell");
    matrix.appendChild(cell);
  }
}

// Replace a random 🦠 with 💪
function replaceRandomEmoji() {
  const cells = document.querySelectorAll("#matrix .cell");
  //- [ ] folosirea a cel puțin unei metode din clasele: Math, Array, String, Date
  const randomIndex = Math.floor(Math.random() * cells.length);
  cells[randomIndex].textContent = "💪";

  // - [ ] folosirea și modificarea evenimentelor generate de mouse si tastatură
  matrix.addEventListener("mouseover", handleHover);
}

function handleHover(event) {
    const cell = event.target;
  
    // Replace 🦠 with 💊 
    if (cell.textContent === "🦠") {
      const originalContent = cell.textContent;
      cell.textContent = "💊";
      setTimeout(() => {
        cell.textContent = originalContent;
      }, 300); // 300ms delay
    }
  
    // Replace 💪 with 🔥 
    if (cell.textContent === "💪") {
      const originalContent = cell.textContent;
      cell.textContent = "🔥";
      setTimeout(() => {
        cell.textContent = originalContent;
      }, 300); // 300ms delay
    }
  }
  

window.onload = function () {
  // - [x] folosirea setTimeout sau setInterval
  setInterval(updateDateTime, 1000);
  updateDateTime();

  // Initialize the game
  createMatrix();

  // Add event listener to the button
  gymBtn.addEventListener("click", replaceRandomEmoji);
};


document.addEventListener("DOMContentLoaded", () => {
    const stats = document.querySelectorAll(".stat-item");
    const randomStyleBtn = document.getElementById("random-style-btn");
  
    randomStyleBtn.addEventListener("click", (event) => {
      event.stopPropagation(); // Prevent propagation
      changeRandomProperty();
    });
  
    stats.forEach((stat) => {
      stat.addEventListener("click", (event) => {
        event.stopPropagation(); 
  
        const computedStyle = getComputedStyle(stat);
        console.log("Background Color:", computedStyle.backgroundColor);
        console.log("Font Size:", computedStyle.fontSize);
        console.log("Margin:", computedStyle.margin);
  
        stat.style.backgroundColor = getRandomColor();
      });
    });
  
    function changeRandomProperty() {
      const randomIndex = Math.floor(Math.random() * stats.length);
      const randomStat = stats[randomIndex];
  
      randomStat.style.backgroundColor = getRandomColor();
      randomStat.style.transform = `scale(${Math.random() * 0.5 + 1})`;
      randomStat.style.margin = `${Math.floor(Math.random() * 20)}px`;
    }
  
    function getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  });
  