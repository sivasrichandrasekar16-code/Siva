// ===== Scroll-to-Top Button =====

let topBtn = document.createElement("button");

topBtn.id = "topBtn";

topBtn.innerText = "↑";

document.body.appendChild(topBtn);

// Style via JS (in case CSS not added)

topBtn.style.position = "fixed";

topBtn.style.bottom = "20px";

topBtn.style.right = "20px";

topBtn.style.padding = "10px 15px";

topBtn.style.border = "none";

topBtn.style.background = "#3949ab";

topBtn.style.color = "white";

topBtn.style.borderRadius = "50%";

topBtn.style.fontSize = "18px";

topBtn.style.cursor = "pointer";

topBtn.style.display = "none";

// Show/Hide button when scrolling

window.onscroll = function () {

  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {

    topBtn.style.display = "block";

  } else {

    topBtn.style.display = "none";

  }

};

// Scroll back to top smoothly

topBtn.onclick = function () {

  window.scrollTo({ top: 0, behavior: "smooth" });

};

// ===== Optional: Dark Mode Toggle =====

let darkBtn = document.createElement("button");

darkBtn.innerText = "🌙 Dark Mode";

document.body.appendChild(darkBtn);

darkBtn.style.position = "fixed";

darkBtn.style.bottom = "70px";

darkBtn.style.right = "20px";

darkBtn.style.padding = "8px 12px";

darkBtn.style.background = "#333";

darkBtn.style.color = "white";

darkBtn.style.border = "none";

darkBtn.style.borderRadius = "8px";

darkBtn.style.cursor = "pointer";

let darkMode = false;

darkBtn.onclick = function () {

  darkMode = !darkMode;

  if (darkMode) {

    document.body.style.background = "#1e1e1e";

    document.body.style.color = "#f5f5f5";

    darkBtn.innerText = "☀️ Light Mode";

  } else {

    document.body.style.background = "#f4f4f9";

    document.body.style.color = "#333";

    darkBtn.innerText = "🌙 Dark Mode";

  }

};