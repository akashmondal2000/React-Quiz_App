import { useState } from "react"
import QUESTIONS from '../questions.js';

console.log(QUESTIONS);


const Quiz = () => {
  const [ userAnswer, setUserAnswer ] = useState([]);
  
  const activeQuestionIndex = userAnswer.length;

  return (
    <div id="question">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>

        <ul id="answers">
            {QUESTIONS[activeQuestionIndex].answers.map((answer)=>(
                <li key={answer} className="answer">
                    <button>{answer}</button>
                </li>
            ))}

        </ul>

    </div>
  )
}

export default Quiz