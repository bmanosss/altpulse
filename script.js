// Χρήστης demo & owner
const demoUsers = {
  "manosbournous@hotmail.com": {
    password: "M@nos775599",
    isOwner: true
  }
};

let currentUser = null;
let selectedLanguage = "el";

// Μετάφραση
const translations = {
  el: {
    login: "Σύνδεση",
    noAccount: "Δεν έχετε λογαριασμό; Αποκτήστε έναν",
    welcome: "Καλώς ήρθες στο ALTPULSE",
    verification: "Επαλήθευση Email",
    aiDefault: "Ανάλυση σε εξέλιξη...",
    portfolio: "Χαρτοφυλάκιο",
    alerts: "Ειδοποιήσεις",
    disclaimer: "Οι προβλέψεις δεν αποτελούν επενδυτική συμβουλή.",
    copyright: "© 2025 ALTPULSE. All rights reserved."
  },
  en: {
    login: "Login",
    noAccount: "Don't have an account? Create one",
    welcome: "Welcome to ALTPULSE",
    verification: "Email Verification",
    aiDefault: "Analysis in progress...",
    portfolio: "Portfolio",
    alerts: "Alerts",
    disclaimer: "Predictions are not financial advice.",
    copyright: "© 2025 ALTPULSE. All rights reserved."
  }
};

function setLanguage(lang) {
  selectedLanguage = lang;
  const t = translations[lang];
  document.getElementById("login-title").innerText = t.login;
  document.querySelector(".switch").innerText = t.noAccount;
  document.querySelector("#welcome-screen h1").innerText = t.welcome;
  document.getElementById("disclaimer").innerText = t.disclaimer;
  document.getElementById("copyright").innerText = t.copyright;
  document.querySelector("button[onclick='showScreen(\"portfolio\")']").innerText = t.portfolio;
  document.querySelector("button[onclick='showScreen(\"alerts\")']").innerText = t.alerts;
}

function toggleRegister() {
  alert("Η λειτουργία εγγραφής είναι ενεργή μόνο για demo.");
}

function login() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  if (demoUsers[email] && demoUsers[email].password === pass) {
    currentUser = email;
    document.getElementById("login-screen").classList.add("hidden");
    document.getElementById("verify-screen").classList.remove("hidden");
  } else {
    alert("Ο λογαριασμός δεν υπάρχει ή είναι λάθος ο κωδικός.");
  }
}

function verifyCode() {
  document.getElementById("verify-screen").classList.add("hidden");
  document.getElementById("welcome-screen").classList.remove("hidden");
  setTimeout(() => {
    document.getElementById("welcome-screen").classList.add("hidden");
    document.getElementById("home-screen").classList.remove("hidden");
  }, 2000);

  if (currentUser === "manosbournous@hotmail.com") {
    document.getElementById("owner-panel").classList.remove("hidden");
  }
}

function showScreen(screen) {
  document.querySelectorAll("section").forEach(s => s.classList.add("hidden"));
  document.getElementById(`${screen}-screen`).classList.remove("hidden");
}

function sendAI(e) {
  if (e.key === "Enter") {
    const input = document.getElementById("ai-input").value.toLowerCase();
    const box = document.getElementById("chatbox");

    let response = translations[selectedLanguage].aiDefault;

    if (input.includes("γεια") || input.includes("hello")) {
      response = selectedLanguage === "el" ? "Γεια σου, πώς μπορώ να βοηθήσω;" : "Hello! How can I assist you?";
    } else if (input.includes("τι κάνεις") || input.includes("how are you")) {
      response = selectedLanguage === "el" ? "Είμαι καλά, παρακολουθώ την αγορά!" : "I'm great, monitoring the markets!";
    }

    box.innerHTML += `<p><strong>Εσύ:</strong> ${input}</p><p><strong>Alt AI:</strong> ${response}</p>`;
    document.getElementById("ai-input").value = "";
    box.scrollTop = box.scrollHeight;
  }
}

function showThemes() {
  alert("Themes: Light, Dark, Blue, VIP Gold, VIP Royal, VIP Black");
}

function banUser() {
  alert("Δυνατότητα ban ενεργή μόνο για demo.");
}

function filterCoins(query) {
  const allCoins = ["SOL", "AVAX", "MATIC", "JASMY", "INJ", "ADA", "PEPE"];
  const list = document.getElementById("all-coins");
  list.innerHTML = "";
  allCoins
    .filter(c => c.toLowerCase().includes(query.toLowerCase()))
    .forEach(c => {
      const li = document.createElement("li");
      li.innerText = `${c} - Προβλεπόμενη άνοδος: ${Math.floor(Math.random() * 100)}%`;
      list.appendChild(li);
    });
}

// Αρχικοποίηση
document.getElementById("settings-btn").addEventListener("click", () => {
  document.getElementById("language-popup").classList.toggle("hidden");
});

document.addEventListener("DOMContentLoaded", () => {
  setLanguage("el");

  const topCoins = document.getElementById("top-coins");
  ["SOL", "AVAX", "MATIC"].forEach(c => {
    const li = document.createElement("li");
    li.innerText = `${c} - Προβλεπόμενη άνοδος: ${Math.floor(70 + Math.random() * 30)}%`;
    topCoins.appendChild(li);
  });
});