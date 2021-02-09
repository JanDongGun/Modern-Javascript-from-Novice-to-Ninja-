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
      score += 20;
    }
  });

  window.scrollTo(0, 0);
  resultDiv.classList.remove("d-none");

  let output = 0;

  const timer = setInterval(() => {
    resultNumber.textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});
