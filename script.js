// Ethics & Morality Decision Tree

const treeData = {
    question: "Should AI be allowed to make life-and-death decisions?",
    options: [
        {
            answer: "Yes, if it reduces human bias.",
            question: "Should AI override human decision-making in medical emergencies?",
            options: [
                {
                    answer: "Yes, AI can process data faster than humans.",
                    question: "Should AI be held legally responsible for mistakes?",
                    options: [
                        { answer: "Yes, accountability is necessary.", result: "Ethics viewpoint: AI should be treated like an entity with responsibility." },
                        { answer: "No, the creators should be held responsible.", result: "Ethics viewpoint: AI is a tool, and humans are ultimately accountable." }
                    ]
                },
                {
                    answer: "No, human intuition is important.",
                    result: "Ethics viewpoint: AI should assist, not replace, human decision-making." 
                }
            ]
        },
        {
            answer: "No, moral choices should be made by humans.",
            question: "Should AI be used in hiring to eliminate bias?",
            options: [
                {
                    answer: "Yes, AI can be objective.",
                    question: "What if the AI reflects hidden biases in the data?",
                    options: [
                        { answer: "It should be improved, but still used.", result: "Ethics viewpoint: AI can be a powerful tool, but must be constantly refined." },
                        { answer: "That’s proof AI shouldn’t be used in hiring.", result: "Ethics viewpoint: Human oversight is required to ensure fairness." }
                    ]
                },
                {
                    answer: "No, hiring requires human judgment.",
                    result: "Ethics viewpoint: AI should not replace human assessment in complex decisions." 
                }
            ]
        }
    ]
};

function createTree(container, data) {
    container.innerHTML = "";
    const questionDiv = document.createElement("div");
    questionDiv.className = "question";
    questionDiv.textContent = data.question;
    container.appendChild(questionDiv);

    data.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option.answer;
        button.onclick = () => {
            if (option.result) {
                container.innerHTML = `<div class='question'>${option.result}</div>`;
            } else {
                createTree(container, option);
            }
        };
        container.appendChild(button);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("tree-container");
    createTree(container, treeData);

    document.getElementById("restart").addEventListener("click", () => {
        createTree(container, treeData);
    });
});
