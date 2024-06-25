const questions = [
    {
        question: "Qual é o principal objetivo de uma análise SWOT?",
        options: [
            "Identificar oportunidades de mercado",
            "Avaliar a concorrência",
            "Analisar forças e fraquezas internas"
        ],
        answer: 2
    },
    {
        question: "O que significa ROI?",
        options: [
            "Retorno sobre investimento",
            "Receita operacional líquida",
            "Redução de obrigações internas"
        ],
        answer: 0
    },
    // Adicione mais perguntas aqui...
];

let currentQuestion = 0;

function showQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");

    questionElement.textContent = questions[currentQuestion].question;
    optionsElement.innerHTML = "";

    questions[currentQuestion].options.forEach((option, index) => {
        const optionElement = document.createElement("div");
        optionElement.classList.add("option");
        optionElement.textContent = option;
        optionElement.addEventListener("click", () => checkAnswer(index));
        optionsElement.appendChild(optionElement);
    });
}

function checkAnswer(selectedIndex) {
    if (selectedIndex === questions[currentQuestion].answer) {
        alert("Resposta correta!");
    } else {
        alert("Resposta incorreta. Tente novamente!");
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        alert("Fim do jogo! Parabéns por testar seus conhecimentos empresariais!");
    }
}

// Iniciar o jogo
showQuestion();
