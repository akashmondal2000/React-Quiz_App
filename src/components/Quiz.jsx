import { useState, useCallback } from "react";
import Summery from "./Summery.jsx";
import QUESTIONS from "../questions.js";
import Question from "./Question.jsx";


const Quiz = () => {
  const [userAnswer, setUserAnswer] = useState([]);

  const activeQuestionIndex =  userAnswer.length ;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      setUserAnswer((prevUserAnswer) => {
        return [...prevUserAnswer, selectedAnswer];
      });
    },[]);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer],
  );

  if (quizIsComplete) {
    return (
      <Summery userAnswer={userAnswer}/>
    );
  }

 

  return (
    <div id="quiz">
      <Question 
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSkipAnswer={handleSkipAnswer}
        onSelectAnswer={handleSelectAnswer}

      />
    </div>
  );
};

export default Quiz;
