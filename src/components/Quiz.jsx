import { useState } from "react"
import quizCompleteLogo from "../assets/quiz-complete.png"
import QuestionTimer from "./QuestionTimer.jsx";
import QUESTIONS from '../questions.js';


const Quiz = () => {
  const [ userAnswer, setUserAnswer ] = useState([]);
  
  const activeQuestionIndex = userAnswer.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;


  function handleSelectAnswer(selectedAnswer){
    setUserAnswer((prevUserAnswer)=>{
        return [...prevUserAnswer,selectedAnswer];
    })
  }


  if(quizIsComplete){
    return(
        <div id="summary">
            <img src={quizCompleteLogo} alt="logo" />
            <h2>Quiz is complete</h2>
        </div>
    )
  }

   const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
   shuffledAnswers.sort(()=> Math.random() - 0.5);

  return (
    <div id="quiz">
        <div id="question">
            <QuestionTimer onTimeout={ ()=>handleSelectAnswer(null) } timeout={10000}/>
            <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
            <ul id="answers">
                {shuffledAnswers.map((answer)=>(
                    <li key={answer} className="answer">
                        <button onClick={()=> handleSelectAnswer(answer)}>{answer}</button>
                    </li>
                ))}

            </ul>

        </div>
    </div>
  )
}

export default Quiz