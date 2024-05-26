import React, { useState } from "react";
import "./FeedbackQA.css";

const FeedbackQAText = ({ number, questionTitle, onAnswerChange }) => {
  const [answer, setAnswer] = useState("");

  const handleAnswerChange = (e) => {
    const { value } = e.target;
    setAnswer(value);
    onAnswerChange(`question${number}`, value);
  };

  return (
    <div className="feedback-qa my-2">
      <h5 className="feedback-qa__title">
        Question {number}: {questionTitle}
      </h5>
      <div className="feedback-qa__answer">
        <input
          type="text"
          value={answer}
          onChange={handleAnswerChange}
          className="feedback-qa__input-small"
        />
      </div>
    </div>
  );
};

export default FeedbackQAText;
