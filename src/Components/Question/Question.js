import React, { useState } from "react";
import "./Question.css";
import { BsPlusCircleFill, BsXCircleFill } from "react-icons/bs";

const Question = ({ question, answer }) => {
  const [isExpand, setExpand] = useState(false);
  const clickHandler = () => {
    setExpand(!isExpand);
    // console.log(isExpand);
  };
  return (
    <>
      <div className="question-div">
        <div className="individual-question">
          <h2>{question}</h2>
          <button onClick={clickHandler}>
            {isExpand ? (
              <BsXCircleFill size={35} color="#c8a3bd" />
            ) : (
              <BsPlusCircleFill size={35} />
            )}
          </button>
        </div>
        {isExpand ? <p>{answer}</p> : null}
      </div>
    </>
  );
};

export default Question;
