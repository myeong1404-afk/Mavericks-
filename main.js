const startBtn = document.getElementById("startBtn");
const titleScreen = document.getElementById("titleScreen");
const nextScreen = document.getElementById("nextScreen");

startBtn.addEventListener("click", () => {
  titleScreen.classList.remove("active");
  nextScreen.classList.add("active");
});
