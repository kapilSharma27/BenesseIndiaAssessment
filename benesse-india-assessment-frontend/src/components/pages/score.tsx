import React, { useEffect, useContext, useState } from "react";
import { AuthContext, AuthContextType } from "../../context/auth/authContext";
import {
  QuizContext,
  QuizContextType,
  QuizQuestion,
} from "../../context/quiz/quizContext";

const Score: React.FC = () => {
  const [score, setScore] = useState(0);
  const authContext: AuthContextType = useContext(AuthContext);
  const quizContext: QuizContextType = useContext(QuizContext);

  const { questions } = quizContext;

  useEffect(() => {
    let caclScore = 0;
    questions.map((question: QuizQuestion) => {
      if (question.answer === question.userAnswer) {
        caclScore++;
      }
    });
    console.log(caclScore);
    setScore(caclScore);
  }, [questions]);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>Score {` ${score} / ${questions.length}`}</h1>
      <div
        style={{ display: "flex", flexDirection: "row", flexFlow: "row wrap" }}
      >
        {questions.map((question, index) => {
          const correct = question.userAnswer === question.answer;
          const notAttempted = question.userAnswer === null;

          let backgroundColor = "lightblue";

          if (correct) {
            backgroundColor = "lightgreen";
          } else if (notAttempted) {
            backgroundColor = "lightblue";
          } else {
            backgroundColor = "pink";
          }
          return (
            <div
              style={{
                backgroundColor,
                width: '500px',
                border: "1px solid black",
                margin: "5px",
                display: "flex",
                flexDirection: "column",
                flexFlow: "column wrap",
              }}
            >
              <div>
                {`${index+1} )  ${question.question}`}
              </div>
              <div style={{display:'flex', flexDirection:"row", flexFlow: "row wrap"}}>
              <div style={{margin: '0px 10px'}}>
                A. {question.A}
              </div>
              <div style={{margin: '0px 10px'}}>
                B. {question.B}
              </div>
              <div style={{margin: '0px 10px'}}>
                C. {question.C}
              </div>
              <div style={{margin: '0px 10px'}}>
                D. {question.D}
              </div>
              </div>
              <div style={{display:'flex', flexDirection:"row", flexFlow: "row wrap"}}>
                <div style={{flex:1}}>
                    {`CORRECT ANSWER: ${question.answer}`}
                </div>
                <div style={{flex:1}}>
                    {`YOUR ANSWER: ${question.userAnswer ? question.userAnswer : 'NOT ATTEMPTED'}`}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Score;
