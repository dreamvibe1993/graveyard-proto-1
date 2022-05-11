const gridContainer = document.querySelector(".grid-container");

for (let i = 0; i < 64 * 64; i++) {
  if (Math.ceil(Math.random(0, 10) * 10) % 7 === 0) {
    gridContainer.insertAdjacentHTML("afterbegin", "<div class='grid-cell yellow' onclick='openBurialSheet()'></div>");
  } else {
    gridContainer.insertAdjacentHTML("afterbegin", "<div class='grid-cell'></div>");
  }
}

const form = document.querySelector(".grave-id-form");
const burialSheet = document.querySelector(".burial-sheet");
const formCloseButton = document.querySelector("#form-close");

function openBurialSheet() {
  if (!burialSheet) return console.error("Cannot capture burial sheet.");
  burialSheet.classList.remove("invisible");
}

function closeBurialSheet() {
  if (!burialSheet) return console.error("Cannot capture burial sheet.");
  burialSheet.classList.add("invisible");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  openBurialSheet();
});

formCloseButton.addEventListener("click", () => {
  closeBurialSheet();
});
