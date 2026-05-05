import { useState, useCallback } from "react";
import quizCompleteLogo from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";
import Question from "./Question.jsx";


const Quiz = () => {
  
  const [ answerState, setAnswerState ] = useState('');
  const [userAnswer, setUserAnswer] = useState([]);

  const activeQuestionIndex = answerState === '' ? userAnswer.length : userAnswer.length - 1;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      setAnswerState("answered")
      setUserAnswer((prevUserAnswer) => {
        return [...prevUserAnswer, selectedAnswer];
      });

      setTimeout(()=>{
        if(selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]){
          setAnswerState('correct')
        }else{
          setAnswerState('wrong')
        }

        setTimeout(()=>{
          setAnswerState('')
        },2000)
      },1000)
    },[activeQuestionIndex]);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer],
  );

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteLogo} alt="logo" />
        <h2>Quiz is complete</h2>
      </div>
    );
  }

 

  return (
    <div id="quiz">
      <Question 
        key={activeQuestionIndex}
        questionText={QUESTIONS[activeQuestionIndex].text}
        answers={QUESTIONS[activeQuestionIndex].answers}
        selectedAnswer={userAnswer[userAnswer.length - 1]}
        answerState={answerState}
        onSkipAnswer={handleSkipAnswer}
        onSelectAnswer={handleSelectAnswer}

      />
    </div>
  );
};

export default Quiz;
