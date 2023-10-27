import React, { useState } from "react";
import "./Quiz.css";
import QuizResult from "./QuizResult";
import questions from "./QuizData.js";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAns, setCorrectAns] = useState(0);
  const [quizRes, setQuizRes] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(
    Array(questions.length).fill(null)
  );
  const [quit, setQuit] = useState(false);
  const [isLastQuestion, setIsLastQuestion] = useState(false);


const handleOnQuit = () => {
  // Display a confirmation prompt
  const shouldQuit = window.confirm("Are you sure you want to quit the exam?");

  if (shouldQuit) {
    // If the user confirms, set quizRes to true and quit to true
    setQuizRes(true);
    setQuit(true);
  }
  // If the user cancels (clicks "No" in the prompt), do nothing
};

const handleOnSubmit = () => {
  // Display a confirmation prompt
  const shouldQuit = window.confirm("Are you sure you want to Submit the exam?");

  if (shouldQuit) {
    // If the user confirms, set quizRes to true and Submit to true
    setQuizRes(true);
    setQuit(true);
  }
  // If the user cancels (clicks "No" in the prompt), do nothing
};


  const handleAnsOption = (isCorrect, optionIndex) => {
    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[currentQuestion] = optionIndex;
    setSelectedOptions(updatedSelectedOptions);

    if (isCorrect) {
      setScore(score + 5);
      setCorrectAns(correctAns + 1);
    } else {
      // Decrease score if changing from a correct option to an incorrect one
      if (
        selectedOptions[currentQuestion] !== null &&
        questions[currentQuestion].questionOption[
          selectedOptions[currentQuestion]
        ].isCorrect
      ) {
        setScore(score - 5);
        setCorrectAns(correctAns - 1);
      }
    }
  };

const handleNextQuestion = () => {
  const nextQuestion = currentQuestion + 1;
  if (nextQuestion < questions.length) {
    setCurrentQuestion(nextQuestion);
    setIsLastQuestion(nextQuestion === questions.length - 1);
  } else {
    setQuizRes(true);
  }
};



  const handlePreviousQuestion = () => {
    const previousQuestion = currentQuestion - 1;
    if (previousQuestion >= 0) {
      setCurrentQuestion(previousQuestion);
    } else {
      // Handle the case when there are no previous questions (e.g., show a message)
    }
  };

  const handleReExam = () => {
    setCurrentQuestion(0);
    setScore(0);
    setCorrectAns(0);
    setSelectedOptions(Array(questions.length).fill(null));
    setQuizRes(false);
  };

  return (
    <>
      <div className="py-10 md:py-20 text-center text-5xl">
        <div className="bg-gradient-to-r from-[#FDBF01] to-[#7eb0f6] inline-block px-4 py-2 rounded-md drop-shadow-md">
          <span className="text-white">Sample test</span>
        </div>
      </div>

      <div className="flex  justify-center h-auto">
        <div className="app flex items-center justify-center">
          {quizRes && quit ? (
            <QuizResult
              score={score}
              correctAns={correctAns}
              length={questions.length}
              handleReExam={handleReExam}
            />
          ) : (
            <>
              <div className="question-section">
                <div className="question-count">
                  <span>
                    Question {currentQuestion + 1} of {questions.length}
                  </span>
                </div>
                <div className="question-text text-xl md:text-3xl leading-relaxed">
                  <h3>{questions[currentQuestion].questionText}</h3>
                </div>
              </div>
              <div className="answer-section flex-row flex md:flex-col md:gap-5">
                {questions[currentQuestion].questionOption.map((option, i) => {
                  const isSelected = selectedOptions[currentQuestion] === i;
                  const optionClassName = isSelected
                    ? "button selected"
                    : "button";

                  return (
                    <button
                      onClick={() => handleAnsOption(option.isCorrect, i)}
                      className={optionClassName}
                      key={i}
                      type="button"
                    >
                      <div className="text-xl md:text-2xl md:p-2">
                        {option.answerText}
                      </div>
                    </button>
                  );
                })}

                <div className="flex gap-3 text-center">
                  <button
                    className={
                      isLastQuestion ? "hover:bg-green-600" : "hover:bg-red-600"
                    }
                    type="button"
                    onClick={isLastQuestion ? handleOnSubmit : handleOnQuit}
                  >
                    {isLastQuestion ? "Submit" : "Quit"}
                  </button>

                  <button
                    className="hover:bg-blue-700"
                    type="button"
                    onClick={handlePreviousQuestion}
                  >
                    Previous
                  </button>
                  <button
                    className="hover:bg-blue-700"
                    type="button"
                    onClick={handleNextQuestion}
                  >
                    Next
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Quiz;
