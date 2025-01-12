document.addEventListener("DOMContentLoaded", () => {
    const authContainer = document.getElementById("auth-container");
    const dashboardContainer = document.getElementById("dashboard-container");
    const logoutBtn = document.getElementById("logout-btn");
    const cardsContainer = document.getElementById("cards-container");
  
    const session = localStorage.getItem("session");
    if (session && new Date() < new Date(JSON.parse(session).expires)) {
      showDashboard();
    }
  
    document.getElementById("login-form").addEventListener("submit", (event) => {
      event.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
  
      if (username === "admin" && password === "password") {
        const expires = new Date();
        expires.setHours(expires.getHours() + 1);
        localStorage.setItem("session", JSON.stringify({ expires }));
  
        showDashboard();
      } else {
        alert("Invalid login credentials.");
      }
    });
  
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("session");
      showAuth();
    });
  
    // Show Auth View
    function showAuth() {
      authContainer.style.display = "block";
      dashboardContainer.style.display = "none";
    }
  
    // Show Dashboard View
    function showDashboard() {
      authContainer.style.display = "none";
      dashboardContainer.style.display = "block";
      loadCards();
    }
  
    // Load Cards from JSON
    async function loadCards() {
      try {
        const response = await fetch("public/data/subscriptions.json");
        if (!response.ok) throw new Error("Failed to fetch data.");
        const data = await response.json();
        displayCards(data);
      } catch (error) {
        console.error(error);
      }
    }
  
    function displayCards(data) {
      cardsContainer.innerHTML = "";
      data.forEach((item) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <h3>${item.name}</h3>
          <p><strong>Email:</strong> ${item.email}</p>
          <p><strong>Phone:</strong> ${item.phone}</p>
          <p><strong>Age:</strong> ${item.age}</p>
          <p><strong>Subscription:</strong> ${item.subscription}</p>
        `;
        cardsContainer.appendChild(card);
      });
    }
  });
  