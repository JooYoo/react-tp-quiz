import React, { useState } from "react";
import Result from "./Result";

const Quiz = () => {
  // data source
  const initProblems = [
    {
      id: 0,
      question: "What is 1 + 1",
      answers: [
        { txt: "0", isCorrect: false },
        { txt: "1", isCorrect: false },
        { txt: "2", isCorrect: true }
      ],
      choice: ""
    },
    {
      id: 1,
      question: "What is 2 + 2",
      answers: [
        { txt: "3", isCorrect: false },
        { txt: "4", isCorrect: true },
        { txt: "5", isCorrect: false }
      ],
      choice: ""
    },
    {
      id: 2,
      question: "What is 3 + 3",
      answers: [
        { txt: "6", isCorrect: true },
        { txt: "7", isCorrect: false },
        { txt: "8", isCorrect: false }
      ],
      choice: ""
    }
  ];
  const [problems, setProblems] = useState(initProblems);

  // current problem index
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);

  const nextIndex = () => {
    // not allowed greater than problems count
    setCurrentProblemIndex((prev) => {
      // check if show result
      if (problems.length - 1 === prev) {
        setIsResult(!isResult);
      }

      return prev === problems.length - 1 ? prev : prev + 1;
    });
  };

  const prevIndex = () => {
    // not allowed less than 0
    setCurrentProblemIndex((prev) => {
      // check if show result
      if (isResult) {
        setIsResult(!isResult);
      }
      return prev === 0 ? 0 : prev - 1;
    });
  };

  // get user picked answers
  const [radio, setRadio] = useState("");

  const getChoice = (userChoice) => {
    // update UI
    setRadio(userChoice);

    // assign result to data
    const newProblems = problems.map((problem) => {
      if (problem.id === currentProblemIndex) {
        return { ...problem, choice: userChoice };
      }
      return problem;
    });

    setProblems(newProblems);
  };

  // get result
  const [isResult, setIsResult] = useState(false);

  // TODO: currentProblemIndex -> thisIndex; as component

  return (
    <>
      <div>
        No. {currentProblemIndex + 1} / {problems.length}
      </div>

      {isResult && <Result />}

      {!isResult && (
        <div>
          <h4>{problems[currentProblemIndex].question}</h4>
          {problems[currentProblemIndex].answers.map((answer, id) => (
            <div key={id}>
              <label>{answer.txt}</label>
              <input
                type="radio"
                checked={radio === answer.txt}
                value={answer.txt}
                onChange={(e) => {
                  getChoice(e.target.value);
                }}
              />
            </div>
          ))}
        </div>
      )}

      <button onClick={prevIndex}>Prew</button>
      <button onClick={nextIndex}>Next</button>
    </>
  );
};

export default Quiz;
