import React, { useState } from "react";
import "./Quiz.css";
import questions from "./QuizData";
import QuizResult from "./QuizResult";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAns, setCorrectAns] = useState(0);
  const [quizRes, setQuizRes] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(
    Array(questions.length).fill(null)
  );
  const[quit,setQuit]= useState(false)
  const handleOnQuit = ()=>{
    alert("Are U sure! want to quit Exam")
    setQuizRes(true)
    setQuit(true)
  }

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
                  <button className="hover:bg-red-600" type="button" onClick={handleOnQuit}>
                    Quit
                  </button>
                  <button className="hover:bg-blue-700" type="button" onClick={handlePreviousQuestion}>
                    Previous
                  </button>
                  <button className="hover:bg-blue-700" type="button" onClick={handleNextQuestion}>
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

