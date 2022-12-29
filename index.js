const scoreElement = document.getElementById("score");
// console.log(score);

const num1 = Math.ceil(Math.random() * 10);

const num2 = Math.ceil(Math.random() * 10);

const question = document.getElementById("question");

question.innerText = `What is ${num1} multiply by ${num2}  ?`;

const input = document.getElementById("input");

const form = document.getElementById("form");

let score = JSON.parse(localStorage.getItem("score"));

scoreElement.innerText = `score: ${score}`;

let correctAns = num1 * num2;
console.log(correctAns);

form.addEventListener("submit", () => {
  // let score = 0;
  const userAns = +input.value;
  console.log(userAns);

  if (userAns == correctAns) {
    score++;
    updateScore();
    console.log(score);
  } else {
    score--;
    updateScore();
  }

  // console.log(scoreElement.innerText);
  // event.preventDefault();
});

function updateScore() {
  localStorage.setItem("score", JSON.stringify(score));
}
