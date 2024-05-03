import { createContext } from "react";

export interface QuizContextType {
  questions: QuizQuestion[];
  current: QuizQuestion;
  filtered: QuizQuestion[] | null;
  error: any;
  loading: boolean;
  quizSubmited: boolean;
  setCurrent:(question: QuizQuestion) =>  void;
  selectedAnswer:(answerSelected: string) => void;
  changeCurrent:(option: string) => void;
  submitQuiz:()=> void;
  //   answers: string[];
}

export interface QuizQuestion {
  questionId: string;
  question: string;
  A: string;
  B: string;
  C: string;
  D: string;
  answer: string;
  userAnswer: string | null;
}

export const questionList: QuizQuestion[] = [
  {
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
  {
    questionId: "2",
    question: "A knish is traditionally stuffed with what filling?",
    A: "potato",
    B: "creamed corn",
    C: "lemon custard",
    D: "raspberry jelly",
    answer: "A",
    userAnswer: null,
  },
  {
    questionId: "3",
    question: "A pita is a type of what?",
    A: "fresh fruit",
    B: "flat bread",
    C: "French tart",
    D: "friend bean dip",
    answer: "B",
    userAnswer: null,
  },
  {
    questionId: "4",
    question:
      "A portrait that comically exaggerates a person's physical traits is called a what?",
    A: "landscape",
    B: "caricature",
    C: "still life",
    D: "Impressionism",
    answer: "B",
    userAnswer: null,
  },
  {
    questionId: "5",
    question: "A second-year college student is usually called a what?",
    A: "sophomore",
    B: "senior",
    C: "freshman ",
    D: "junior ",
    answer: "A",
    userAnswer: null,
  },
  {
    questionId: "6",
    question:
      "A student who earns a J.D. can begin his or her career as a what?",
    A: "lawyer",
    B: "bricklayer",
    C: "doctor",
    D: "accountant",
    answer: "A",
    userAnswer: null,
  },
  {
    questionId: "7",
    question: "A triptych is a work of art that is painted on how many panels?",
    A: "two",
    B: "three",
    C: "five",
    D: "eight",
    answer: "B",
    userAnswer: null,
  },
  {
    questionId: "8",
    question:
      "According to a famous line from the existentialist play 'No Exit' what is hell?",
    A: "oneself",
    B: "other people",
    C: "little made large",
    D: "hued in green and blue",
    answer: "B",
    userAnswer: null,
  },
  {
    questionId: "9",
    question:
      "According to a popular slogan, what state should people not 'mess with'?",
    A: "New York",
    B: "Texas",
    C: "Montana",
    D: "Rhode Island",
    answer: "B",
    userAnswer: null,
  },
  {
    questionId: "10",
    question:
      "According to a Yale University study, what smell is the most recognizable to American adults?",
    A: "tuna",
    B: "laundry",
    C: "popcorn",
    D: "coffee",
    answer: "D",
    userAnswer: null,
  },
  {
    questionId: "11",
    question:
      "According to folklore, the 'jackalope' is an antlered version of what animal?",
    A: "chicken",
    B: "rabbit",
    C: "moose",
    D: "snake",
    answer: "B",
    userAnswer: null,
  },
  {
    questionId: "12",
    question: "According to Greek mythology, who was Apollo's twin sister?",
    A: "Aphrodite",
    B: "Artemis",
    C: "Venus",
    D: "Athena",
    answer: "B",
    userAnswer: null,
  },
  {
    questionId: "13",
    question:
      "According to legend, if you give someone the 'evil eye' what are you doing?",
    A: "cursing them",
    B: "blessing a child",
    C: "counting money",
    D: "passing time",
    answer: "A",
    userAnswer: null,
  },
  {
    questionId: "14",
    question:
      "According to legend, in what country are you most likely to meet a leprechaun?",
    A: "Ireland",
    B: "Poland",
    C: "Greenland",
    D: "Scotland",
    answer: "A",
    userAnswer: null,
  },
  {
    questionId: "15",
    question:
      "According to the American Kennel Club, what is the most popular breed of dog in the US as of 1999?",
    A: "Poodle",
    B: "Beagle",
    C: "German shepherd",
    D: "Labrador retriever",
    answer: "D",
    userAnswer: null,
  },
  {
    questionId: "16",
    question:
      "According to the Bible, Moses and Aaron had a sister named what?",
    A: "Jochebed",
    B: "Ruth",
    C: "Leah",
    D: "Miriam",
    answer: "D",
    userAnswer: null,
  },
  {
    questionId: "17",
    question:
      "According to the children's nursery rhyme, what type of ocean did Columbus sail in 1492?",
    A: "calm",
    B: "blue",
    C: "windy",
    D: "really big",
    answer: "B",
    userAnswer: null,
  },
  {
    questionId: "18",
    question:
      "According to the Mother Goose nursery rhyme, which child is full of woe?",
    A: "Monday's child",
    B: "Wednesday's child",
    C: "Thursday's child",
    D: "Saturday's child",
    answer: "B",
    userAnswer: null,
  },
  {
    questionId: "19",
    question:
      "According to the popular saying, what should you do 'when in Rome'?",
    A: "watch your wallet",
    B: "see the Coliseum",
    C: "as the Romans do",
    D: "don't drink the water",
    answer: "C",
    userAnswer: null,
  },
  {
    questionId: "20",
    question: "According to the proverb, necessity is the mother of what?",
    A: "Invention",
    B: "Luck",
    C: "Problems",
    D: "Procrastination",
    answer: "A",
    userAnswer: null,
  },
  {
    questionId: "21",
    question:
      "According to the title of a popular children's TV show, what color is Bear's big house?",
    A: "red",
    B: "green",
    C: "purple",
    D: "blue",
    answer: "D",
    userAnswer: null,
  },
  {
    questionId: "22",
    question:
      "According to the USDA, which food group should you eat the most servings of per day?",
    A: "vegetables",
    B: "dairy",
    C: "meats",
    D: "breads",
    answer: "D",
    userAnswer: null,
  },
];

export const QuizContext = createContext<QuizContextType>({
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
  filtered:null,
  loading:false,
  error:null,
  quizSubmited: false,
  setCurrent: ()=> {},
  selectedAnswer:()=> {},
  changeCurrent: ()=> {},
  submitQuiz:()=> {},
});
