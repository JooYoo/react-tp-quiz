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

      // build result
      const thisResult = {
        question: problem.question,
        rightAnswer: rightAnswerObj.txt,
        yourAnswer: problem.choice,
        isCorrect: rightAnswerObj.txt === problem.choice ? true : false
      };

      // push each result to state
      setResults(results.push(thisResult));
    });

    console.table(results);
  };

  return (
    <>
      <h4>Result:</h4>
      {/* {results.map((result, index) => (
        <div key={index}>
          <p>{result.question}</p>
        </div>
      ))} */}
    </>
  );
};

export default Result;
