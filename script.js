document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Initialize a score for each personality type
    const scores = {
        Technologist: 0,
        Humanist: 0,
        Pragmatist: 0,
        ConsciousnessExplorer: 0
    };

    // Loop through each question and update the score based on selected answer
    const questions = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8'];
    questions.forEach(q => {
        const selectedAnswer = document.querySelector(`input[name="${q}"]:checked`);
        if (selectedAnswer) {
            scores[selectedAnswer.value]++;
        }
    });

    // Determine the highest score and display the result
    const result = Object.entries(scores).reduce((a, b) => a[1] > b[1] ? a : b);
    const resultMessage = `Your personality type is: ${result[0]}`;

    // Display the result message
    const resultElement = document.getElementById('result');
    resultElement.style.display = 'block';
    resultElement.innerHTML = `<h2>${resultMessage}</h2>`;
});

