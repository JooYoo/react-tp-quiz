import React, { useEffect, useState } from "react";

const Result = ({ problems }) => {
  useEffect(() => {
    getResult();
  }, []);

  const initResults = [];
  const [results, setResults] = useState(initResults);

  const getResult = () => {
    problems.forEach((problem) => {
      // find this Problem right answer
      const rightAnswerObj = problem.answers.find(
        (answer) => answer.isCorrect === true
      );
      console.log(rightAnswerObj);

      // TODO: build result and push to
      const thisResult = {
        problem: "",
        rightAnswer: "",
        yourAnswer: "",
        isCorrect: false
      };
    });
  };

  return (
    <>
      <div>Result:</div>
    </>
  );
};

export default Result;
