import quizCompleteLogo from "../assets/quiz-complete.png";
import QUESTIONS from '../questions.js';

const Summery = ({userAnswer}) => {
    console.log("summery comp =>",userAnswer)
    const skippedAnswered = userAnswer.filter((answer)=> answer === null);
    const correctAnswered = userAnswer.filter((answer,index)=> answer === QUESTIONS[index].answers[0]);

    const skippedAnswerShare = Math.round((skippedAnswered.length / userAnswer.length)*100);
    const correctAnswerShare = Math.round((correctAnswered.length / userAnswer.length)*100);
    const wrongAnswreShare = 100 - skippedAnswerShare - correctAnswerShare ;
  return (
    <div id="summary">
        <img src={quizCompleteLogo} alt="logo" />
        <h2>Quiz is complete</h2>
        <div id="summary-stats">
            <p>
                <span className="number"> {skippedAnswerShare}%</span>
                <span className="text">Skipped</span>
            </p>
            <p>
                <span className="number"> {correctAnswerShare}%</span>
                <span className="text">Answred Correctly</span>
            </p>
            <p>
                <span className="number"> {wrongAnswreShare}%</span>
                <span className="text">Answred InCorrectly</span>
            </p>
        </div>
        <ol>
            {userAnswer.map((answer,index)=>{
                let cssClass = "user-answer";

                if(answer === null){
                    cssClass += " skipped"
                }else if(answer === QUESTIONS[index].answers[0]){
                    cssClass += " correct"
                }else{
                    cssClass += " wrong"
                }

                return(
                    <li key={index}>
                    <h3>{index+1}</h3>
                    <p className="question">{QUESTIONS[index].text}</p>
                    <p className={cssClass}>{answer ?? "Skipped"}</p>
                </li>
                )
            })}
        </ol>
    </div>
  )
}

export default Summery