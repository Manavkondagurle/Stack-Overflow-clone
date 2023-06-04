import React , { useState } from "react";
import { useParams, Link ,useNavigate, useLocation} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import copy from "copy-to-clipboard"; 

import upvote from "../../assets/up.png";
import downvote from "../../assets/down.png";
import Avatar from "../../coponents/Avatar/Avatar";
import "./Question.css";
import DisplayAnswer from "./DisplayAnswer";
import {postAnswer, deleteQuestion, voteQuestion } from "../../actions/question";
const QuestionDetail = () => {

  const { id } = useParams();
  const questionsList = useSelector((state) => state.questionsReducer);
  const location = useLocation();
  
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const url = "http://localhost:3000";


  // var questionsList = [
  //   {
  //     _id: "1",
  //     upVotes: 3,
  //     downVotes: 2,
  //     noOfAnswers: 2,
  //     questionTitle: "What is a function?",
  //     questionBody: "It meant to be",
  //     questionTags: ["java", "node js", "react js"],
  //     userPosted: "mano",
  //     userId: 1,
  //     askedOn: "jan 1",
  //     answer: [
  //       {
  //         answerBody: "Answer",
  //         userAnsered: "Manav",
  //         answerredOn: "jan 2",
  //         userId: 2,
  //       },
  //     ],
  //   },
  //   {
  //     _id: "2",
  //     upVotes: 3,
  //     downVotes: 2,
  //     noOfAnswers: 0,
  //     questionTitle: "What is a function?",
  //     questionBody: "It meant to be",
  //     questionTags: ["javascript", "R", "python"],
  //     userPosted: "mano",
  //     userId: 1,
  //     askedOn: "jan 1",
  //     answer: [
  //       {
  //         answerBody: "Answer",
  //         userAnsered: "Manav",
  //         answerredOn: "jan 2",
  //         userId: 2,
  //       },
  //     ],
  //   },
  //   {
  //     _id: "3",
  //     upVotes: 3,
  //     downVotes: 2,
  //     noOfAnswers: 0,
  //     questionTitle: "What is a function?",
  //     questionBody: "It meant to be",
  //     questionTags: ["javascript", "R", "python"],
  //     userPosted: "mano",
  //     userId: 1,
  //     askedOn: "jan 1",
  //     answer: [
  //       {
  //         answerBody: "Answer",
  //         userAnsered: "Manav",
  //         answerredOn: "jan 2",
  //         userId: 2,
  //       },
  //     ],
  //   },
  // ];
  const [Answer, setAnswer] = useState("");
  const user = useSelector((state) => state.currentUserReducer);
  const handlePostAns = (e, answerLength) => {
    e.preventDefault();
    if (user === null) {
      alert("Login or Signup to answer a question");
      Navigate("/Auth");
    } else {
      if (Answer === "") {
        alert("Enter an answer before submitting");
      } else {
        dispatch(
          postAnswer({
            id,
            noOfAnswers: answerLength + 1,
            answerBody: Answer,
            userAnswered: user.result.name,
            userId: user.result._id,
          })
        );
        setAnswer("");
      }
    }
  };

  const handleShare = () => {
    copy(url + location.pathname);
    alert("Copied url : " + url + location.pathname);
  };

  const handleDelete = () => {
    dispatch(deleteQuestion(id, Navigate));
  };

  const handleUpVote = () => {
    if (user === null) {
      alert("Login or Signup to up vote a question");
      Navigate("/Auth");
    } else {
      dispatch(voteQuestion(id, "upVote"));
    }
  };

  const handleDownVote = () => {
    if (user === null) {
      alert("Login or Signup to down vote a question");
      Navigate("/Auth");
    } else {
      dispatch(voteQuestion(id, "downVote"));
    }
  };


  return (
    <div className="question-details-page">
      {questionsList.data === null ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {questionsList.data
            .filter((question) => question._id === id)
            .map((question) => (
              <div key={question._id}>
                {/* console.log(question); */}
                <section className="question-detail-container">
                  <h1>{question.questionTitle}</h1>
                  <div className="question-detail-container-2">
                    <div className="question-votes">
                      <img
                        src={upvote}
                        alt="upvote"
                        width="18"
                        className="votes-icon"
                        onClick={handleUpVote}
                      />
                      <p>{question.upVote.length- question.downVote.length}</p>
                      <img
                        src={downvote}
                        alt="downvote"
                        width="18"
                        className="votes-icon"
                        onClick={handleDownVote}
                      />
                    </div>
                    <div style={{ width: "100%" }}>
                      <p className="question-body">{question.questionBody}</p>
                      <div className="question-details-tags">
                        {question.questionTags.map((tags) => (
                          <p key={tags}>{tags}</p>
                        ))}
                      </div>
                      <div className="question-actions-user">
                        <div>
                          <button type="button" onClick={handleShare}>Share</button>
                          {user?.result?._id === question?.userId && (
                          <button type="button" onClick={handleDelete}>Delete</button>
                          )}
                        </div>
                        <div>
                          <p>asked {moment(question.askedOn).fromNow()}</p>
                          <Link
                            to={`/Users/${question.userId}`}
                            className="user-link"
                            style={{ color: "#0086d8" }}
                          >
                            <Avatar backgroundColor="orange" px="8px" py="5px">
                              {question.userPosted.charAt(0).toUpperCase()}
                            </Avatar>
                            <div>{question.userPosted}</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {question.noOfAnswers !== 0 && (
                  <section>
                    <h3>{question.noOfAnswers} answer</h3>
                    <DisplayAnswer key={question._id} question={question} handleShare={handleShare}/>
                  </section>
                )}
                <section className="post-ans-container">
                  <form onSubmit={(e) => {handlePostAns(e, question.answer.length);}}>
                    <h3>your Answer</h3>
                    <textarea name="" id="" cols="30" rows="10" onChange={(e) => setAnswer(e.target.value)}></textarea>
                    <br />
                    <input
                      type="submit"
                      className="post-ans-btn"
                      value="Post Your Answer"
                    />
                  </form>

                  <p className="hover-text" style={{ fontSize: ".95em" }}>
                    Browse other Question tagged
                    {question.questionTags.map((tag) => (
                      <Link to="/Tags" key={tag} className="ans-tags">
                        {" "}
                        {tag}{" "}
                      </Link>
                    ))}{" "}
                    or
                    <Link
                      to="/AskQuestion"
                      style={{ textDecoration: "none", color: "#009dff" }}
                    >
                      {" "}
                      ask your own question
                    </Link>
                  </p>
                </section>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default QuestionDetail;
