import React from "react";

const ProblemNr = ({ thisIndex, problems }) => {
  return (
    <>
      <small>
        No. {thisIndex + 1} / {problems.length}
      </small>
    </>
  );
};

export default ProblemNr;
