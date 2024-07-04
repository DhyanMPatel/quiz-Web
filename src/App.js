// need to install BootStrap using "npm install bootstrap" Command

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect, useState } from "react";
import qBank from "./Component/questionBank";
import Questions from "./Component/questions";
import Score from "./Component/score";
import './App.css'

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [quizStarted, setQuizStarted] = useState(false);
  const [timer, setTimer] = useState(10)
  const [questions, setQuestions] = useState(qBank);
  const [isLastq, setIsLastq] = useState(false)
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (quizStarted) {
      const interval = setInterval(() => {
        setTimer((time) => {
          if (time > 0) {
            return time - 1;
          } else {
            setCurrentQuestion(que => que + 1)
            return 10;
          }
        })
      }, 1000);
      return () => clearInterval(interval)
    }
  }, [currentQuestion, quizStarted])

  function startQuiz() {
    setQuizStarted(true);
  }

  function handleAnswerClick(selectedanswer) {
    if (selectedanswer === questions[currentQuestion].answer) {
      setScore(sco => sco + 1);
    }
  };

  const handleNextQuestion = () => {
    /// here CQ is 2 but que go 3-to-4. So CQ +2 == Q.length will enter in if() end isLastq makes true
    if (currentQuestion + 2 === questions.length) {
      setIsLastq(true);
    }
    /// CQ will update here, means new CQ is 3
    setCurrentQuestion(que => que + 1)
    setTimer(10);
  }



  return (
    <div className='App'>
      <h1>Quiz App</h1>
      <div>
        {
          !quizStarted ? (
            <div>
              <h2>Start Text</h2>
              <button className="btn btn-primary" onClick={startQuiz} >Start Quiz</button>
            </div>
          ) : currentQuestion < questions.length ? (
            <Questions
              timer={timer}
              questions={questions}
              currentQuestion={currentQuestion}
              isLastq={isLastq}
              handleAnswerClick={handleAnswerClick}
              handleNextQuestion={handleNextQuestion}
            />
          ) : (
            <Score
              score={score}
              setCurrentQuestion={setCurrentQuestion}
              setScore={setScore}
              setQuizStarted={setQuizStarted}
              setIsLastq={setIsLastq}
              setTimer={setTimer}
            />
          )
        }
      </div>
    </div>
  )
}