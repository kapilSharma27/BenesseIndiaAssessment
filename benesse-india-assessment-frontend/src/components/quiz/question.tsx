import React, { Fragment, useContext, useEffect } from "react";
import { AuthContext, AuthContextType } from "../../context/auth/authContext";
import axios from "axios";
import { QuizContext, QuizContextType } from "../../context/quiz/quizContext";

const Question: React.FC = () => {
  const quizContext: QuizContextType = useContext(QuizContext);
  const { questions, current, loading, error, filtered, selectedAnswer } =
    quizContext;

  return (
    <Fragment>
      <div>
        {current && (
          <>
            <div style={{ margin: "50px  0px 0px 0px" }}>
              {`Question :: ${current.question}`}
            </div>
            <div
              style={{
                alignItems: "center",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                margin: "50px 0px 20px 0px",
              }}
            >
              {" "}
              OPTIONS{" "}
            </div>
            <div>
              <div style={{ display: "flex" }}>
                <div style={{ flex: "1" }} onClick={() => selectedAnswer("A")}>
                  <div className="question-item"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor:"lightblue",
                      margin: '2px',
                      borderRadius: '7px'
                    }}
                  >
                    A. {current.A}
                  </div>
                </div>
                <div style={{ flex: "1" }} onClick={() => selectedAnswer("B")}>
                  <div className="question-item"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor:"lightblue",
                      margin: '2px',
                      borderRadius: '7px'
                    }}
                  >
                    B. {current.B}
                  </div>
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <div style={{ flex: "1" }} onClick={() => selectedAnswer("C")}>
                  <div className="question-item"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor:"lightblue",
                      margin: '2px',
                      borderRadius: '7px'
                    }}
                  >
                    C. {current.C}
                  </div>
                </div>
                <div style={{ flex: "1" }} onClick={() => selectedAnswer("D")}>
                  <div className="question-item"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor:"lightblue",
                      margin: '2px',
                      borderRadius: '7px'
                    }}
                  >
                    D. {current.D}
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", margin: "20px 0px" }}>
              <div style={{ flex: "1" }}>Selected Answer</div>
              <div style={{ flex: "1" }}>
                {current.userAnswer ? `${current.userAnswer}` : "??"}
              </div>
            </div>
          </>
        )}
      </div>
    </Fragment>
  );
};

export default Question;
