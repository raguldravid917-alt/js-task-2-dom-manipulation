// THEME SWITCHER
const body = document.body;
const themeToggleBtn = document.getElementById("theme-toggle-btn");
const themeLabel = document.getElementById("theme-label");

function updateThemeLabel() {
  if (body.classList.contains("light")) {
    themeLabel.textContent = "Light mode";
  } else {
    themeLabel.textContent = "Dark mode";
  }
}

// button click → dark ↔ light
themeToggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  body.classList.toggle("light");
  updateThemeLabel();
});

// FONT SIZE CONTROLS
const previewText = document.getElementById("preview-text");
const fontIncBtn = document.getElementById("font-increase-btn");
const fontDecBtn = document.getElementById("font-decrease-btn");
const fontResetBtn = document.getElementById("font-reset-btn");

let currentFontSize = 16; // px

function applyFontSize() {
  previewText.style.fontSize = currentFontSize + "px";
}

// initial
applyFontSize();

fontIncBtn.addEventListener("click", () => {
  if (currentFontSize < 28) {
    currentFontSize += 2;
    applyFontSize();
  }
});

fontDecBtn.addEventListener("click", () => {
  if (currentFontSize > 10) {
    currentFontSize -= 2;
    applyFontSize();
  }
});

fontResetBtn.addEventListener("click", () => {
  currentFontSize = 16;
  applyFontSize();
});

// BACKGROUND COLOR CHANGER
const bgSelect = document.getElementById("bg-select");
const previewBox = document.getElementById("preview-box");

bgSelect.addEventListener("change", (event) => {
  const value = event.target.value;
  previewBox.style.backgroundColor = value;

  // very light background na text dark aagattum
  if (value === "#ffffff") {
    previewText.style.color = "#111827";
  } else {
    previewText.style.color = ""; // CSS default
  }
});
