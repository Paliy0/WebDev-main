const darkButton = document.getElementById("dark");
const lightButton = document.getElementById("light");
const randomButton = document.getElementById("random");
const body = document.body;

//Apply the cached theme on reload

const theme = localStorage.getItem("theme");

if (theme) {
  body.classList.add(theme);
}

//Button event handlers
darkButton.onclick = () => {
  body.classList.replace("light", "dark");
  localStorage.setItem("theme", "dark");
};

lightButton.onclick = () => {
  body.classList.replace("dark", "light");
  localStorage.setItem("theme", "light");
};
