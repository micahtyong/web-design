function toggleTheme() {
  document.getElementById("body").classList.toggle("dark-mode");
}

const buttonVariable = document.getElementById("toggleButton");
buttonVariable.onclick = toggleTheme;
