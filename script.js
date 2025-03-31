function submitQuiz() {
    // Get all the answers from the quiz form
    const form = document.getElementById("quiz-form");
    const formData = new FormData(form);

    // Initialize counters for each personality type
    let scores = {
        Technologist: 0,
        Humanist: 0,
        Pragmatist: 0,
        ConsciousnessExplorer: 0
    };

    // Loop through each question and add points based on the selected answer
    formData.forEach((value, key) => {
        if (value === "Technologist") {
            scores.Technologist++;
        } else if (value === "Humanist") {
            scores.Humanist++;
        } else if (value === "Pragmatist") {
            scores.Pragmatist++;
        } else if (value === "Consciousness Explorer") {
            scores.ConsciousnessExplorer++;
        }
    });

    // Determine which personality type scored the highest
    let highestScore = 0;
    let personalityType = "";

    for (let type in scores) {
        if (scores[type] > highestScore) {
            highestScore = scores[type];
            personalityType = type.replace("ConsciousnessExplorer", "Consciousness Explorer");
    }
}

    // Display the result
    const resultContainer = document.getElementById("result");
    const resultType = document.getElementById("result-type");
    const resultDescription = document.getElementById("result-description");

    resultContainer.style.display = "block";
    resultType.textContent = personalityType;

    // Display different descriptions based on the personality type
    if (personalityType === "Technologist") {
        resultDescription.textContent = "You embrace technology and see its potential to enhance efficiency and innovation. You are often excited by the possibilities of AI and its role in our daily lives. You trust data-driven solutions and believe in leveraging technology to solve complex problems.";
    } else if (personalityType === "Humanist") {
        resultDescription.textContent = "You value human connections and personal experiences. You prioritize ethics, empathy, and intuition over pure efficiency. You believe that human judgment, creativity, and emotions are irreplaceable, and you advocate for responsible AI use that centers on human well-being.";
    } else if (personalityType === "Pragmatist") {
        resultDescription.textContent = "You evaluate AI on a case-by-case basis, supporting its use when it improves efficiency but recognizing its limits in areas requiring human judgment. You seek practical solutions rather than ideological stances on technology, carefully weighing its benefits and risks before embracing new advancements.";
    } else if (personalityType === "Consciousness Explorer") {
        resultDescription.textContent = "You are curious about AI’s deeper implications—whether ethical, philosophical, or consciousness-related. You question what it means to be intelligent and sentient, exploring the boundaries between human and artificial intelligence. You are open to new perspectives on technology’s role in shaping our understanding of the mind and reality.";
    }
}

