const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "Berlin", "Madrid", "Rome"],
    answer: "Paris"
  },
  {
    question: "2 + 2 = ?",
    options: ["3", "4", "5", "6"],
    answer: "4"
  },
  {
    question: "HTML stands for?",
    options: [
      "Hyperlinks and Text Markup Language",
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlink Text Module Language"
    ],
    answer: "Hyper Text Markup Language"
  }
];

let currentQuestion = 0;
let score = 0;

const questionBox = document.getElementById("question-box");
const optionsList = document.getElementById("options-list");
const nextBtn = document.getElementById("next-btn");
const resultBox = document.getElementById("result-box");

function loadQuestion() {
  const q = questions[currentQuestion];
  questionBox.textContent = q.question;
  optionsList.innerHTML = "";

  q.options.forEach(option => {
    const li = document.createElement("li");
    li.textContent = option;
    li.onclick = () => selectAnswer(option);
    optionsList.appendChild(li);
  });
}

function selectAnswer(selected) {
  const correct = questions[currentQuestion].answer;
  if (selected === correct) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  questionBox.style.display = "none";
  optionsList.style.display = "none";
  nextBtn.style.display = "none";
  resultBox.classList.remove("hidden");
  resultBox.innerText = `Your Score: ${score} / ${questions.length}`;
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

loadQuestion();
