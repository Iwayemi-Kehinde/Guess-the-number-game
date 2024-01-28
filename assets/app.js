const guess = document.querySelector(".guess")
const element = document.querySelector("span")
const input = document.querySelector("input")
const winorloose = document.querySelector("p")
const win = document.querySelector(".win")
const loose = document.querySelector(".loose")
const draw = document.querySelector(".draw")
const consider = document.querySelector(".content")
const playAgain = document.querySelector(".play-again")
const showHowToPlay = document.querySelector(".how")
const overLay = document.querySelector(".overlay")
const close = document.querySelector(".x")
let winCount = 0
let looseCount = 0


showHowToPlay.addEventListener("click", () => {
  overLay.classList.add("show")
})

close.addEventListener("click", () => {
  overLay.classList.remove("show")
})

function guessNum() {
  if (winCount >= 10) {
    window.alert("YOU W0N (TEN TIMES), COMPUTER LOOSED")
    playAgain.classList.add("Visible")
    return
  } else if (looseCount >= 10) {
    window.alert("YOU LOOSED, COMPUTER WON (TEN TIMES)")
    playAgain.classList.add("Visible")
    return
  }
  if (isNaN(input.value)) {
    window.alert("PLEASE INPUT A NUMERIC VALUE BETWEEN 0 AND 10")
    input.value = ""
    return
  }
  if (input.value.trim() && input.value.trim() <= 10) {
    guess.textContent = "Guess Again"
    const randomNumber = Math.floor((Math.random() * 10) + 1)
    element.textContent = `You picked ${parseInt(input.value)}, Computer picked ${randomNumber}`
    if (randomNumber === parseInt(input.value)) {
      winorloose.textContent = "YOU WIN"
      winCount++
      win.textContent = `WINS: ${winCount}`
    } else {
      winorloose.textContent = "YOU LOOSE"
      looseCount++
      loose.textContent = `LOOSES: ${looseCount}`
    }
  }
}


guess.addEventListener("click", () => {
  guessNum()
    input.textContent = ""
})

document.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    guessNum()
  }
})

function resetGame() {
  winCount = 0;
  looseCount = 0;
  win.textContent = "";
  loose.textContent = "";
  guess.textContent = "Guess";
  element.textContent = "";
  winorloose.textContent = "";
  playAgain.classList.remove("Visible")
  input.value = "";
}

playAgain.addEventListener("click", () => {
  resetGame();
});
