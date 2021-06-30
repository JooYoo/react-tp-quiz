import React, { useState } from "react";

const Quiz = () => {
  // data source
  const problems = [
    {
      id: 1,
      question: "What is 1 + 1",
      answers: [
        { txt: "1", isCorrect: false },
        { txt: "2", isCorrect: true },
        { txt: "3", isCorrect: false },
        { txt: "4", isCorrect: false }
      ]
    },
    {
      id: 2,
      question: "What is 2 + 2",
      answers: [
        { txt: "2", isCorrect: false },
        { txt: "3", isCorrect: false },
        { txt: "4", isCorrect: true },
        { txt: "5", isCorrect: false }
      ]
    },
    {
      id: 3,
      question: "What is 3 + 3",
      answers: [
        { txt: "3", isCorrect: false },
        { txt: "4", isCorrect: false },
        { txt: "5", isCorrect: false },
        { txt: "6", isCorrect: true }
      ]
    }
  ];

  // current problem index
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);

  const nextIndex = () => {
    // not allowed greater than problems count
    setCurrentProblemIndex((prev) => {
      return prev === problems.length ? prev : prev + 1;
    });
  };

  const prevIndex = () => {
    // not allowed less than 0
    setCurrentProblemIndex((prev) => {
      return prev === 0 ? 0 : prev - 1;
    });
  };

  // TODO: map problems on DOM

  return (
    <>
      <h3>quiz works</h3>
      <div>Current Problem Index: {currentProblemIndex}</div>
      <button onClick={prevIndex}>Prew</button>
      <button onClick={nextIndex}>Next</button>
    </>
  );
};

export default Quiz;
