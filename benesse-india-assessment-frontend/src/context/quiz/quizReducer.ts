import { QuizQuestion, questionList } from './quizContext';
import {
    ADD_QUESTION,
    DELETE_QUESTION,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_QUESTION,
    FILTER_QUESTIONS,
    CLEAR_FILTER,
    QUESTION_ERROR,
    GET_QUESTION,
    CLEAR_QUESTIONS,
    SET_QUESTIONS,
    SUBMIT_QUIZ
  } from "../types";

  interface Action {
    type: string;
    payload?: any;
  }
  
  interface State {
    questions: QuizQuestion[],
    current: QuizQuestion,
    filtered: QuizQuestion[] | null,
    loading:boolean;
    error: any;
    quizSubmited: boolean;
  }
  const quizReducer = (state:State, action: Action) : State => {
    console.log(action.payload);
    switch (action.type) {
      case GET_QUESTION:
        return {
          ...state,
          questions: action.payload,
          loading: false,
        };
      case UPDATE_QUESTION:
        return {
          ...state,
          questions: state.questions.map((question: any) =>
            question.questionId === action.payload.questionId ? action.payload : question
          ),
          loading: false,
        };
    //   case DELETE_QUESTION:
    //     return {
    //       ...state,
    //       questions: state.questions.filter((question) => {
    //         return question._id !== action.payload;
    //       }),
    //       loading: false,
    //     };
    //   case CLEAR_QUESTIONS:
    //     return {
    //       ...state,
    //       questions: null,
    //       filtered: null,
    //       error: null,
    //       current: null,
    //     };
      case SET_CURRENT:
        return { ...state, current: action.payload };
    //   case CLEAR_CURRENT:
    //     return { ...state, current: null };
      case FILTER_QUESTIONS:
        return {
          ...state,
          filtered: state.questions.filter((question: any) => {
            const regex = new RegExp(`${action.payload}`, "gi");
            return question.name.match(regex) || question.email.match(regex);
          }),
        };
      case CLEAR_FILTER:
        return { ...state, filtered: null };
      case QUESTION_ERROR:
        return { ...state, error: action.payload };
        case SUBMIT_QUIZ:
            return{...state, quizSubmited: true};
      default:
        return state;
    }
  };
  
  export default quizReducer;
  