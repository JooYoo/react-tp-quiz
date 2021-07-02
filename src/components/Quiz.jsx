import React, { useState } from "react";

const Quiz = () => {
  // data source
  const initProblems = [
    {
      id: 1,
      question: "What is 1 + 1",
      answers: [
        { txt: "1", isCorrect: false, isChoice: false },
        { txt: "2", isCorrect: true, isChoice: false },
        { txt: "3", isCorrect: false, isChoice: false },
        { txt: "4", isCorrect: false, isChoice: false }
      ],
      userChoice: ""
    },
    {
      id: 2,
      question: "What is 2 + 2",
      answers: [
        { txt: "2", isCorrect: false, isChoice: false },
        { txt: "3", isCorrect: false, isChoice: false },
        { txt: "4", isCorrect: true, isChoice: false },
        { txt: "5", isCorrect: false, isChoice: false }
      ]
    },
    {
      id: 3,
      question: "What is 3 + 3",
      answers: [
        { txt: "3", isCorrect: false, isChoice: false },
        { txt: "4", isCorrect: false, isChoice: false },
        { txt: "5", isCorrect: false, isChoice: false },
        { txt: "6", isCorrect: true, isChoice: false }
      ]
    }
  ];
  const [problems, setProblems] = useState(initProblems);

  // current problem index
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);

  const nextIndex = () => {
    // not allowed greater than problems count
    setCurrentProblemIndex((prev) => {
      return prev === problems.length - 1 ? prev : prev + 1;
    });
  };

  const prevIndex = () => {
    // not allowed less than 0
    setCurrentProblemIndex((prev) => {
      return prev === 0 ? 0 : prev - 1;
    });
  };

  // TODO:  get user picked answers

  const getChoice = (choice) => {
    // const newProblems = problems.map((problem) => {
    //   if (problem.id === currentProblemIndex) {
    //   }
    //   return newProblems;
    // });
    // console.table(newProblems);
  };

  return (
    <>
      <div> No. {currentProblemIndex + 1}</div>

      <form>
        <h4>{problems[currentProblemIndex].question}</h4>
        {problems[currentProblemIndex].answers.map((answer, id) => (
          <div key={id}>
            <input
              type="radio"
              value={answer.txt}
              onChange={(e) => getChoice(e.target.value)}
            />
            <label>{answer.txt}</label>
          </div>
        ))}
      </form>

      <button onClick={prevIndex}>Prew</button>
      <button onClick={nextIndex}>Next</button>
    </>
  );
};

export default Quiz;
