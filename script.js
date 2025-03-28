document.addEventListener("DOMContentLoaded", function () {
  const questions = [
    {
      question: "Should social media platforms be allowed to show you ads based on your personal interests and online behavior?",
      answers: [
        { answer: "Yes, it’s helpful because I see ads I care about.", result: "Technologist" },
        { answer: "No, it feels like an invasion of privacy.", result: "Humanist" },
        { answer: "It depends on how much control we have over it.", result: "Pragmatist" },
        { answer: "Only if users can easily opt-out of personalized ads.", result: "ConsciousnessExplorer" },
      ],
    },
    {
      question: "Should video games be allowed to make decisions based on how well you play or how much money you spend in the game?",
      answers: [
        { answer: "Yes, it’s fun when the game adapts to how I play.", result: "Technologist" },
        { answer: "No, it’s unfair to players who just want to enjoy the game.", result: "Humanist" },
        { answer: "It depends on how much money you spend.", result: "Pragmatist" },
        { answer: "Only if the game is truly for entertainment, not profit.", result: "ConsciousnessExplorer" },
      ],
    },
    {
      question: "If you could design a robot to help around the house, would you want it to have its own opinions on what chores to do?",
      answers: [
        { answer: "Yes, it would be cool if it could think for itself!", result: "ConsciousnessExplorer" },
        { answer: "No, I’d rather tell it what to do.", result: "Humanist" },
        { answer: "It depends on how much I trust it.", result: "Pragmatist" },
        { answer: "The robot should always be efficient, not opinionated.", result: "Technologist" },
      ],
    },
    {
      question: "Should an AI assistant be able to give you advice on personal problems, like relationships or friendships?",
      answers: [
        { answer: "Yes, AI might be able to help me see things more clearly.", result: "Technologist" },
        { answer: "No, I prefer to talk to my friends or family about that.", result: "Humanist" },
        { answer: "It depends on the situation.", result: "Pragmatist" },
        { answer: "Maybe, but only if the AI understands my feelings.", result: "ConsciousnessExplorer" },
      ],
    },
    {
      question: "Would you be okay with a robot being your teacher for certain subjects?",
      answers: [
        { answer: "Yes, robots can be super efficient at teaching things like math!", result: "Technologist" },
        { answer: "No, I think human teachers understand me better.", result: "Humanist" },
        { answer: "It depends on the subject.", result: "Pragmatist" },
        { answer: "Only if the robot is taught by humans first.", result: "ConsciousnessExplorer" },
      ],
    },
    {
      question: "Should AI ever be in charge of deciding who gets hired for a job, based on a person’s online profile and resume?",
      answers: [
        { answer: "Yes, it could help make the process fairer and faster.", result: "Technologist" },
        { answer: "No, it’s too risky to let AI make that kind of decision.", result: "Humanist" },
        { answer: "It depends on the type of job and the AI’s accuracy.", result: "Pragmatist" },
        { answer: "Only if the AI is overseen by humans.", result: "ConsciousnessExplorer" },
      ],
    },
    {
      question: "Do you think it’s okay for apps to collect data about your habits to improve their recommendations (like Spotify playlists or Netflix shows)?",
      answers: [
        { answer: "Yes, it’s great when they recommend things I like!", result: "Technologist" },
        { answer: "No, I don’t like that they know so much about me.", result: "Humanist" },
        { answer: "It depends on how much control I have over the data.", result: "Pragmatist" },
        { answer: "Maybe, but only if they’re transparent about it.", result: "ConsciousnessExplorer" },
      ],
    },
    {
      question: "If AI could design the perfect playlist for your mood, would you trust it to know what you like?",
      answers: [
        { answer: "Yes, it would be amazing to have music tailored just for me.", result: "Technologist" },
        { answer: "No, I think I know my tastes better than an AI does.", result: "Humanist" },
        { answer: "It depends on how well the AI understands my mood.", result: "Pragmatist" },
        { answer: "Maybe, but I’d still like some human input.", result: "ConsciousnessExplorer" },
      ],
    },
  ];

  let currentQuestionIndex = 0;

  function displayQuestion(index) {
    const question = questions[index];
    const questionContainer = document.getElementById("question-container");

    questionContainer.innerHTML = `
      <div class="question">${question.question}</div>
      <div class="answers">
        ${question.answers
          .map(
            (answer, i) => `
          <button onclick="selectAnswer('${answer.result}')">${answer.answer}</button>
        `
          )
          .join("")}
      </div>
    `;
  }

  function selectAnswer(result) {
    const resultContainer = document.getElementById("result-container");
    resultContainer.innerHTML = `
      <div>Your result: ${result}</div>
    `;
    document.getElementById("restart").style.display = "block"; // Show the restart button after the answer
  }

  function restartQuiz() {
    currentQuestionIndex = 0;
    document.getElementById("result-container").innerHTML = "";
    document.getElementById("restart").style.display = "none"; // Hide the restart button
    displayQuestion(currentQuestionIndex);
  }

  // Display the first question when the page loads
  displayQuestion(currentQuestionIndex);
});

