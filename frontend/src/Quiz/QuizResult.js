import React from "react";
import "./Quiz.css";

const QuizResult = ({ score, correctAns, length, handleReExam }) => {
   const percentageScore = (score / (length * 5)) * 100;
   let message = "";
   if (percentageScore >= 80) {
     message = "Excellent";
   } else if (percentageScore >= 60) {
     message = "Good";
   } else {
     message = "Needs Improvement";
   }
  return (
    <>
      <div className="score-section flex flex-col gap-5 text-xl">
        <h2>Completed!</h2>
        <h3>
          Total Score {score}/{length * 5}
        </h3>
        <h3>
          Your Correct Question {correctAns} out of {length}
        </h3>
        <h3 className="text-3xl text-green-600">    

        {message}
        </h3>
        <button type="button" onClick={handleReExam}>
          Re Exam
        </button>
      </div>
    </>
  );
};

export default QuizResult;
