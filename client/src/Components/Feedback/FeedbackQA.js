import React, { useState } from "react";
import "./FeedbackQA.css";

const FeedbackQA = ({ number, questionTitle, onAnswerChange }) => {
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleRadioChange = (e) => {
    const { value } = e.target;
    setSelectedAnswer(value);
    onAnswerChange(`question${number}`, value);
  };

  return (
    <div className="feedback-qa my-2 py-2">
      <h5 className="feedback-qa__title">
        Question {number}: {questionTitle}
      </h5>
      <div className="feedback-qa__options">
        <label
          className={`feedback-qa__option ${
            selectedAnswer === "1" ? "selected" : ""
          }`}
        >
          <input
            type="radio"
            name={`question${number}`}
            value="1"
            checked={selectedAnswer === "1"}
            onChange={handleRadioChange}
            className="feedback-qa__input"
          />
          <span role="img" aria-label="Sad Emoji">
            😞
          </span>
        </label>
        <label
          className={`feedback-qa__option ${
            selectedAnswer === "2" ? "selected" : ""
          }`}
        >
          <input
            type="radio"
            name={`question${number}`}
            value="2"
            checked={selectedAnswer === "2"}
            onChange={handleRadioChange}
            className="feedback-qa__input"
          />
          <span role="img" aria-label="Neutral Emoji">
            😐
          </span>
        </label>
        <label
          className={`feedback-qa__option ${
            selectedAnswer === "3" ? "selected" : ""
          }`}
        >
          <input
            type="radio"
            name={`question${number}`}
            value="3"
            checked={selectedAnswer === "3"}
            onChange={handleRadioChange}
            className="feedback-qa__input"
          />
          <span role="img" aria-label="Slightly Happy Emoji">
            🙂
          </span>
        </label>
        <label
          className={`feedback-qa__option ${
            selectedAnswer === "4" ? "selected" : ""
          }`}
        >
          <input
            type="radio"
            name={`question${number}`}
            value="4"
            checked={selectedAnswer === "4"}
            onChange={handleRadioChange}
            className="feedback-qa__input"
          />
          <span role="img" aria-label="Happy Emoji">
            😃
          </span>
        </label>
        <label
          className={`feedback-qa__option ${
            selectedAnswer === "5" ? "selected" : ""
          }`}
        >
          <input
            type="radio"
            name={`question${number}`}
            value="5"
            checked={selectedAnswer === "5"}
            onChange={handleRadioChange}
            className="feedback-qa__input"
          />
          <span role="img" aria-label="Very Happy Emoji">
            😄
          </span>
        </label>
      </div>
    </div>
  );
};

export default FeedbackQA;
