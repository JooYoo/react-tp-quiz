import React from "react";

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

  // TODO: current problem index

  return (
    <>
      <div>quiz works</div>
    </>
  );
};

export default Quiz;
