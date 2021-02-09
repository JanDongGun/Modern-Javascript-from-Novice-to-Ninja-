const correctAnswers = ["B", "B", "B", "B", "A"];
const form = document.querySelector(".quiz-form");
const resultDiv = document.querySelector(".result");
const resultNumber = resultDiv.querySelector("span");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;

  let userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
    form.q5.value,
  ];

  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });

  resultDiv.classList.remove("d-none");
  resultNumber.textContent = `${score}%`;
  window.scrollTo(0, 0);
});
