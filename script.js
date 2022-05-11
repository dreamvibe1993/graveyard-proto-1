const gridContainer = document.querySelector(".grid-container");

const giveMeRandomInt = (min, max) => {
  const r = Math.ceil(Math.random(0, 10) * 10);
  if (!min || !max) {
    console.warn("You forgot to pass min and max to random int generator. Returning default");
    return r;
  }
  return r > max ? giveMeRandomInt(min, max) : r < min ? giveMeRandomInt(min, max) : r;
};
const exp = () => giveMeRandomInt() % 7 === 0;

function populateYard(useI) {
  for (let i = 0; i < 64 * 64; i++) {
    if (useI ? i % useI === 0 : exp()) {
      gridContainer.insertAdjacentHTML(
        "afterbegin",
        "<div class='grid-cell yellow' onclick='openBurialSheet()'></div>"
      );
    } else {
      gridContainer.insertAdjacentHTML("afterbegin", "<div class='grid-cell'></div>");
    }
  }
}

function evictYard() {
  gridContainer.replaceChildren([]);
  const funnyNumbers = [3, 5, 7, 9, 11, 2, 1, 10];
  const rand = giveMeRandomInt(0, funnyNumbers.length);
  console.log(rand);
  populateYard(funnyNumbers[rand]);
}

populateYard();

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
