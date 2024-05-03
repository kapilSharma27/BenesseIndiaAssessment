import React, { useReducer, ReactNode } from "react";
import { QuizContext, QuizQuestion, questionList } from "./quizContext";
import quizReducer from "./quizReducer";

interface Props {
    children?: ReactNode;
}



const QuizState:any = ({ children }: Props) => {
    const initialState: any = {
        questions: questionList,
        current: {
            questionId: "1",
            question:
              "A flashing red traffic light signifies that a driver should do what?",
            A: "stop",
            B: "speed up",
            C: "proceed with caution",
            D: "honk the horn",
            answer: "A",
            userAnswer: null,
        },
        filtered: null,
        loading: false,
        error: null,
        quizSubmited: false,
    };

    const [state, dispatch] = useReducer(quizReducer, initialState);
    const { questions, current, filtered, loading, error, quizSubmited } = state;

    const setCurrent = (question: QuizQuestion) => {
        console.log("123",question);
        dispatch({ type: "SET_CURRENT", payload: question });
    }

    const selectedAnswer = (answerSelected: string) => {
        const item = questions.findIndex(question => question.questionId === current.questionId);
        const currentItem  = current;
        currentItem.userAnswer = answerSelected;
        dispatch({type: "SET_CURRENT", payload: currentItem});
        dispatch({ type: "UPDATE_QUESTION", payload: currentItem})
    }

    const changeCurrent = (option: string) => {
        const item  = questions.findIndex(question => question.questionId === current.questionId);
        if(option==='next') {
            if(item<questions.length - 1) {
                dispatch({type: "SET_CURRENT", payload: questions[item+1]})
            }
        }else {
            if(item > 0) {
                dispatch({type: "SET_CURRENT", payload: questions[item-1]})
            }
        }
    }

    const submitQuiz = () => {
        dispatch({type: "SUBMIT_QUIZ"})
    }
  
    return (
      <QuizContext.Provider
        value={{
          questions,
          current,
          filtered,
          loading,
          error,
          quizSubmited,
          setCurrent,
          selectedAnswer,
          changeCurrent,
          submitQuiz
        }}
      >
        {children}
      </QuizContext.Provider>
    );
  };
  
  export default QuizState;
  