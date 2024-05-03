import React, { useContext, useEffect } from "react";
import { AuthContext, AuthContextType } from "../../context/auth/authContext";
import axios from "axios";
import QuizQuestions from "../quiz/quizQuestions";
import { QuizContext, QuizContextType } from "../../context/quiz/quizContext";
import Question from "../quiz/question";
import Score from "./score";

const Quiz: React.FC = () => {
  const authContext: AuthContextType = useContext(AuthContext);
  const quizContext: QuizContextType = useContext(QuizContext);
  const { changeCurrent, quizSubmited, submitQuiz } = quizContext;

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div >
      {!quizSubmited ? (
        <>
        <div style={{ display: "flex", height: "calc(100vh - 80px)" }}>
          <div style={{ flex: "1" }}>
            <div
              style={{
                display: "flex",
                padding: "20px",
                flexDirection: "row",
                flexFlow: "row wrap",
              }}
            >
              <QuizQuestions />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                padding: "50px 40px",
              }}
            >
              <div
                style={{ flex: 1, padding: "0px 10px" }}
                onClick={() => changeCurrent("prev")}
              >
                <div
                  className="question-item"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "pink",
                    borderRadius: "10px",
                  }}
                >
                  {"<<"}
                </div>
              </div>
              <div
                style={{ flex: 1, padding: "0px 10px" }}
                onClick={() => changeCurrent("next")}
              >
                <div
                  className="question-item"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "pink",
                    borderRadius: "10px",
                  }}
                >
                  {">>"}
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "orange",
                height: "35px",
                margin: "0px 100px",
                borderRadius: "20px",
                color: "white",
              }}
              onClick={()=> submitQuiz()}
            >
              <div>Submit</div>
            </div>
          </div>
          <div style={{ flex: "1" }}>
            <Question />
          </div>
          </div>
        </>
      ) : (
        <>
          <div>
            <Score />
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
