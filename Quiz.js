// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import questions from "./data/questions";

// function Quiz() {
//   const [current, setCurrent] = useState(0);
//   const [score, setScore] = useState(0);
//   const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));

//   const navigate = useNavigate();

//   const handleOptionClick = (option) => {
//     const updatedAnswers = [...userAnswers];
//     const prevAnswer = updatedAnswers[current];

//     if (prevAnswer && prevAnswer.correct === prevAnswer.selected) {
//       setScore(score - 1);
//     }

//     updatedAnswers[current] = {
//       question: questions[current].question,
//       selected: option,
//       correct: questions[current].answer,
//     };

//     if (questions[current].answer === option) {
//       setScore(score + 1);
//     }

//     setUserAnswers(updatedAnswers);
//   };

//   const handleNext = () => {
//     if (current < questions.length - 1) {
//       setCurrent(current + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (current > 0) {
//       setCurrent(current - 1);
//     }
//   };

//   const handleSubmit = () => {
//     navigate("/result", {
//       state: {
//         score,
//         totalQuestions: questions.length,
//         userAnswers,
//       },
//     });
//   };

//   const selectedOption = userAnswers[current]?.selected;

//   return (
//     <div className="container">
//       <h2>Question {current + 1} of {questions.length}</h2>
//       <h3>{questions[current].question}</h3>

//       {questions[current].options.map((opt, idx) => (
//         <button
//           key={idx}
//           onClick={() => handleOptionClick(opt)}
//           style={{
//             backgroundColor: selectedOption === opt ? "#4CAF50" : "",
//           }}
//         >
//           {opt}
//         </button>
//       ))}

//       <div style={{ marginTop: "20px" }}>
//         <button onClick={handlePrevious} disabled={current === 0}>
//           Previous
//         </button>

//         {current < questions.length - 1 && (
//           <button onClick={handleNext} style={{ marginLeft: "10px" }}>
//             Next Question
//           </button>
//         )}

//         {current === questions.length - 1 && (
//           <button onClick={handleSubmit} style={{ marginLeft: "10px" }}>
//             Submit
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Quiz;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import questions from './data/questions'; // make sure questions.js is in src/

function Quiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate();

  const handleAnswer = (option) => {
    const correct = questions[currentQ].answer;
    if (option === correct) {
      setScore(score + 1);
    }

    setAnswers([
      ...answers,
      {
        question: questions[currentQ].question,
        selected: option,
        correct: correct
      }
    ]);

    const next = currentQ + 1;
    if (next < questions.length) {
      setCurrentQ(next);
    } else {
      
      navigate('/result', {
        state: { score: score + (option === correct ? 1 : 0), answers }
      });
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Question {currentQ + 1} of {questions.length}</h2>
      <h3>{questions[currentQ].question}</h3>

      {questions[currentQ].options.map((opt, idx) => (
        <button
          key={idx}
          onClick={() => handleAnswer(opt)}
          style={{
            display: 'block',
            margin: '8px 0',
            padding: '10px 15px',
            fontSize: '16px'
          }}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

export default Quiz;


