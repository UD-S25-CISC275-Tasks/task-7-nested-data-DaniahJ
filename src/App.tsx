import React from "react";
import "./App.css";
import {
    makeQuiz,
    getPublishedQuestions,
    addQuestion,
    toggleQuestionPublished,
    removeQuestion,
    findQuestionById,
    countPublishedQuestions,
    quizToCSV,
    Quiz,
    Question,
} from "./nested";

function App(): React.JSX.Element {
    // Sample questions
    const sampleQuestions: Question[] = [
        { id: 1, text: "What is TypeScript?", published: true },
        { id: 2, text: "What is a closure?", published: false },
        { id: 3, text: "What is React?", published: true },
    ];

    // Create a Quiz
    const myQuiz: Quiz = makeQuiz("JavaScript Fundamentals", sampleQuestions);
    console.log("Created Quiz:", myQuiz);

    // Get published questions
    console.log("Published Questions:", getPublishedQuestions(myQuiz));

    // Add a new question
    const updatedQuiz = addQuestion(myQuiz, {
        id: 4,
        text: "What is JSX?",
        published: false,
    });
    console.log("Quiz after Adding a Question:", updatedQuiz);

    // Toggle a question's published status
    const toggledQuiz = toggleQuestionPublished(updatedQuiz, 4);
    console.log("Quiz after Toggling Published Status:", toggledQuiz);

    // Remove a question
    const quizWithoutQuestion = removeQuestion(toggledQuiz, 2);
    console.log("Quiz after Removing a Question:", quizWithoutQuestion);

    // Find a question by ID
    console.log("Find Question by ID (1):", findQuestionById(myQuiz, 1));

    // Count published questions
    console.log(
        "Count of Published Questions:",
        countPublishedQuestions(myQuiz),
    );

    // Convert quiz to CSV format
    console.log("Quiz in CSV Format:\n" + quizToCSV(myQuiz));

    return (
        <div className="App">
            <header className="App-header">
                CISC275 - Task 7: Nested Data in TypeScript
            </header>
            <p>Check the console for function outputs.</p>
        </div>
    );
}

export default App;
