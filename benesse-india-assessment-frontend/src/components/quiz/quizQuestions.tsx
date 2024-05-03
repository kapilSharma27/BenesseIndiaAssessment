import React, { Fragment, useContext, useEffect } from "react";
import { AuthContext, AuthContextType } from "../../context/auth/authContext";
import { QuizContext, QuizContextType } from "../../context/quiz/quizContext";

const QuizQuestions: React.FC = () => {
  const quizContext: QuizContextType = useContext(QuizContext);
  const { questions, current, loading, error, filtered, setCurrent } =
    quizContext;

  return (
    <>
      {questions.length > 0 &&
        questions.map((question, index) => {
          const isActive = current.questionId === question.questionId;
          const hasUserAnswer = question.userAnswer !== null;

          let backgroundColor = "lightcyan";
          if (isActive) {
            backgroundColor = "lightpink";
          } else if (hasUserAnswer) {
            backgroundColor = "lightblue";
          }

          return (
            <div
              key={question.questionId}
              className="question-item"
              onClick={() => setCurrent(question)}
              style={{
                width: "50px",
                height: "50px",
                backgroundColor,
                margin: "2px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {index + 1}
            </div>
          );
        })}
    </>
  );
};

export default QuizQuestions;
