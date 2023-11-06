const clickMeButton = document.getElementById("clickMeButton");
const body = document.body;

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const toggleVisibility = (button) => {
  if (button.classList.contains("hide")) {
    button.classList.remove("hide");
  } else {
    button.classList.add("hide");
  }
};

const moveButton = (button) => {
  const buttonWidth = button.offsetWidth;
  const buttonHeight = button.offsetHeight;
  const maxX = window.innerWidth - buttonWidth;
  const maxY = window.innerHeight - buttonHeight;

  const randomX = getRandomInt(0, maxX);
  const randomY = getRandomInt(0, maxY);

  button.style.left = randomX + "px";
  button.style.top = randomY + "px";
};

clickMeButton.addEventListener("mouseover", () => {
  if (Math.random() < 0.5) {
    toggleVisibility(clickMeButton);
    setTimeout(() => {
      toggleVisibility(clickMeButton);
      moveButton(clickMeButton);
    }, 1000);
  }
});

clickMeButton.addEventListener("click", () => {
  toggleVisibility(clickMeButton);
  setTimeout(() => {
    toggleVisibility(clickMeButton);
    moveButton(clickMeButton);
  }, 1000);
});
