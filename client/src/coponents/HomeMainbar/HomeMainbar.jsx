import React from "react";
import { useLocation , useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";
import "./HomeMainbar.css";
import QuestionList from './QuestionList'
const HomeMainbar = () => {
  const location = useLocation();
  const user = 1
  const navigate = useNavigate();

  const questionsList = useSelector((state) => state.questionsReducer);

  // var questionsList = [
  //   {
  //     _id: '1',
  //     upVotes: 3,
  //     downVotes: 2,
  //     noOfAnswers: 2,
  //     questionTitle: "What is a function?",
  //     questionBody: "It meant to be",
  //     questionTags: ["java", "node js", "react js"],
  //     userPosted: "mano",
  //     userId: 1,
  //     askedOn: "jan 1",
  //     answer:[{
  //       answerBody:"Answer",
  //       userAnsered:'Manav',
  //       answerredOn:"jan 2",
  //       userId:2,
  //     }]
  //   },
  //   {
  //     _id: '2',
  //     upVotes: 3,
  //     downVotes: 2,
  //     noOfAnswers: 0,
  //     questionTitle: "What is a function?",
  //     questionBody: "It meant to be",
  //     questionTags: ["javascript", "R", "python"],
  //     userPosted: "mano",
  //     userId: 1,
  //     askedOn: "jan 1",
  //     answer:[{
  //       answerBody:"Answer",
  //       userAnsered:'Manav',
  //       answerredOn:"jan 2",
  //       userId:2,
  //     }]
  //   },
  //   {
  //     _id: '3',
  //     upVotes: 3,
  //     downVotes: 2,
  //     noOfAnswers: 0,
  //     questionTitle: "What is a function?",
  //     questionBody: "It meant to be",
  //     questionTags: ["javascript", "R", "python"],
  //     userPosted: "mano",
  //     userId: 1,
  //     askedOn: "jan 1",
  //     answer:[{
  //       answerBody:"Answer",
  //       userAnsered:'Manav',
  //       answerredOn:"jan 2",
  //       userId:2,
  //     }]
  //   },
  // ];


  const redirect = () => {
      

  }
  const checkAurh = () => {
    if (user === null) {
      alert("login or signup to ask a question")
      navigate("./Auth")
    }
    else{
      navigate('./AskQuestion')
    }
  }

  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? ( <h1>Top Questions</h1> ) : ( <h1>All Questions</h1> )}

        <button onClick={checkAurh} className="ask-btn">Ask Question</button>
      </div>
      <div>
        {questionsList.data === null ? (
          <div className="lds-ring">
            <p>Loading...</p>
          </div>
        ) : (
          <>
            <p>{questionsList.data.length} Questions</p>
            <QuestionList questionsList={questionsList.data} />
          </>
        )}
      </div>
    </div>
  )
};

export default HomeMainbar;
