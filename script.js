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
            personalityType = type;
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
        resultDescription.textContent = "You embrace technology and see its potential to enhance efficiency and innovation. You are often excited by the possibilities of AI and its role in our daily lives.";
    } else if (personalityType === "Humanist") {
        resultDescription.textContent = "You value human connections and personal experiences. You believe in the importance of human intuition and empathy, especially when it comes to decision-making and relationships.";
    } else if (personalityType === "Pragmatist") {
        resultDescription.textContent = "You prefer practical solutions and a balanced approach. You are focused on what works and believe in adaptability, knowing when to use technology and when to rely on human touch.";
    } else if (personalityType === "Consciousness Explorer") {
        resultDescription.textContent = "You are fascinated by the concept of consciousness and how it relates to both humans and AI. You believe in exploring the deeper, philosophical implications of technology and its impact on our lives.";
    }
}

