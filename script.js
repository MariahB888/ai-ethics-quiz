document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("tree-container");
    let currentLevel = 0;
    let path = [];

    const questions = {
        "start": {
            text: "Should AI be allowed to make medical decisions?",
            options: ["Yes", "No", "Depends"]
        },
        "Yes": {
            text: "Should AI replace doctors?",
            options: ["Yes, it's more accurate", "No, doctors are needed", "Only for diagnosis"]
        },
        "No": {
            text: "Should AI assist in medical decisions?",
            options: ["Yes", "No"]
        },
        "Depends": {
            text: "What factors should decide?",
            options: ["Ethical concerns", "Cost effectiveness", "Patient choice"]
        }
    };

    function renderQuestion(questionKey) {
        const questionData = questions[questionKey];
        if (!questionData) return;
        
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");
        questionDiv.style.marginLeft = `${currentLevel * 40}px`;
        
        const questionText = document.createElement("p");
        questionText.textContent = questionData.text;
        questionDiv.appendChild(questionText);
        
        questionData.options.forEach(option => {
            const button = document.createElement("button");
            button.textContent = option;
            button.onclick = function () {
                path.push(option);
                currentLevel++;
                renderQuestion(option);
            };
            questionDiv.appendChild(button);
        });
        
        container.appendChild(questionDiv);
    }

    function restartQuiz() {
        container.innerHTML = "";
        currentLevel = 0;
        path = [];
        renderQuestion("start");
    }
    
    const restartButton = document.getElementById("restart");
    restartButton.addEventListener("click", restartQuiz);
    
    renderQuestion("start");
});
