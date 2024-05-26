import React, { useState, useEffect } from "react";
import { MDBCard, MDBCardBody, MDBBtn } from "mdb-react-ui-kit";
import Confetti from "react-dom-confetti";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FeedbackQA from "./FeedbackQA";
import axios from "axios";

const FeedbackWrapper = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [formData, setFormData] = useState({});
  const [questions, setQuestions] = useState([]);
  const [showEmailField, setShowEmailField] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/getquestion/22/"
        );
        const { data } = response;
        const { Event_id_fk, Q1, Q2, Q3, Q4, Q5 } = data[0]; // Assuming there is only one question in the array
        const questionsData = [Q1, Q2, Q3, Q4, Q5];
        setQuestions(questionsData);
      } catch (error) {
        console.error("Error retrieving data:", error);
      }
    };

    fetchData();
  }, []);

  const handleFormSubmit = async () => {
    try {
      await axios.post("http://127.0.0.1:8000/api/feedbackans/", {
        eid: 22,
        q1a: formData.question1,
        q2a: formData.question2,
        q3a: formData.question3,
        q4a: formData.question4,
        q5a: formData.question5,
      });
      console.log("Form data submitted successfully:", formData);
      setFormData({});
      setEmail("");
    } catch (error) {
      console.error("Error submitting form data:", error);
    }

    setShowConfetti(true);
    toast("Thank you for your feedback!");
  };

  const handleAnswerChange = (question, answer) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [question]: answer,
    }));
  };

  const handleToggleEmailField = () => {
    setShowEmailField((prevShowEmailField) => !prevShowEmailField);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <MDBCard
      className="my-5"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MDBCardBody style={{ width: "65%" }}>
        <div className="form-check form-switch text-end mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="toggleEmailField"
            checked={showEmailField}
            onChange={handleToggleEmailField}
          />
          <label
            className="form-check-label"
            htmlFor="toggleEmailField"
            style={{ userSelect: "none" }}
          >
            <span className="slider round">Give personal data</span>
          </label>
        </div>
        {questions.map((question, index) => (
          <FeedbackQA
            key={index + 1}
            number={index + 1}
            questionTitle={question}
            onAnswerChange={handleAnswerChange}
          />
        ))}
        {showEmailField && (
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
        )}
        <MDBBtn color="primary my-5 fs-5" onClick={handleFormSubmit}>
          Submit feedback
        </MDBBtn>

        <Confetti active={showConfetti} config={{ duration: 2000 }} />

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={true}
        />
      </MDBCardBody>
    </MDBCard>
  );
};

export default FeedbackWrapper;

// import React, { useState, useEffect } from "react";
// import { MDBCard, MDBCardBody, MDBBtn } from "mdb-react-ui-kit";
// import Confetti from "react-dom-confetti";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import FeedbackQA from "./FeedbackQA";
// import axios from "axios";

// const FeedbackWrapper = () => {
//   const [showConfetti, setShowConfetti] = useState(false);
//   const [formData, setFormData] = useState({});
//   const [questions, setQuestions] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "http://127.0.0.1:8000/api/getquestion/22/"
//         );
//         const { data } = response;
//         const { Event_id_fk, Q1, Q2, Q3, Q4, Q5 } = data[0]; // Assuming there is only one question in the array
//         const questionsData = [Q1, Q2, Q3, Q4, Q5];
//         setQuestions(questionsData);
//       } catch (error) {
//         console.error("Error retrieving data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleFormSubmit = async () => {
//     try {
//       await axios.post("http://127.0.0.1:8000/api/feedbackans/", {
//         eid: 22,
//         q1a: formData.question1,
//         q2a: formData.question2,
//         q3a: formData.question3,
//         q4a: formData.question4,
//         q5a: formData.question5,
//       });
//       console.log("Form data submitted successfully:", formData);
//       setFormData({});
//     } catch (error) {
//       console.error("Error submitting form data:", error);
//     }

//     setShowConfetti(true);
//     toast("Thank you for your feedback!");
//   };

//   const handleAnswerChange = (question, answer) => {
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [question]: answer,
//     }));
//   };

//   return (
//     <MDBCard className="my-5 ">
//       <MDBCardBody>
//         {questions.map((question, index) => (
//           <FeedbackQA
//             key={index + 1}
//             number={index + 1}
//             questionTitle={question}
//             onAnswerChange={handleAnswerChange}
//           />
//         ))}
//         <MDBBtn color="primary my-5 fs-5" onClick={handleFormSubmit}>
//           Submit feedback
//         </MDBBtn>

//         <Confetti active={showConfetti} config={{ duration: 2000 }} />

//         <ToastContainer
//           position="top-right"
//           autoClose={5000}
//           hideProgressBar={true}
//         />
//       </MDBCardBody>
//     </MDBCard>
//   );
// };

// export default FeedbackWrapper;
