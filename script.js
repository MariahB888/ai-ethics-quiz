document.getElementById('quiz-form').addEventListener('submit', function (e) {
    e.preventDefault();

    let resultText = '';
    let technologist = 0;
    let humanist = 0;
    let pragmatist = 0;
    let consciousnessExplorer = 0;

    // Check answers for each question
    const answers = document.querySelectorAll('input[type="radio"]:checked');
    
    answers.forEach(answer => {
        if (answer.value === "Technologist") {
            technologist++;
        } else if (answer.value === "Humanist") {
            humanist++;
        } else if (answer.value === "Pragmatist") {
            pragmatist++;
        } else if (answer.value === "Consciousness Explorer") {
            consciousnessExplorer++;
        }
    });

    // Calculate the result
    if (technologist > humanist && technologist > pragmatist && technologist > consciousnessExplorer) {
        resultText = "You are a Technologist!";
    } else if (humanist > technologist && humanist > pragmatist && humanist > consciousnessExplorer) {
        resultText = "You are a Humanist!";
    } else if (pragmatist > technologist && pragmatist > humanist && pragmatist > consciousnessExplorer) {
        resultText = "You are a Pragmatist!";
    } else if (consciousnessExplorer > technologist && consciousnessExplorer > humanist && consciousnessExplorer > pragmatist) {
        resultText = "You are a Consciousness Explorer!";
    }

    // Show the result
    document.getElementById('quiz-form').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('result-text').textContent = resultText;
});
