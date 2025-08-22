
// import { useLocation, Link } from "react-router-dom";
// const Result = () => {
//   const location = useLocation();
//   const {
//     score = 0,
//     totalQuestions = 10,
//     userAnswers = []
//   } = location.state || {};

//   return (
//     <div className="container">
//       <h2>Quiz Results</h2>
//       <h3>Your Score: {score} out of {totalQuestions} </h3>

//       <ul>
//         {userAnswers.map((ans, idx) => (
//           <li key={idx}>
//             <strong>{ans.question}</strong><br />
//             Your Answer: {ans.selected}<br />
//             Correct Answer: {ans.correct}
//           </li>
//         ))}
//       </ul>

//       <Link to="/"><button>Back to Home</button></Link>
//     </div>
//   );
// };

// export default Result;


import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const { score = 0, answers = [] } = location.state || {};

  const total = answers.length || 1;
  const percentage = (score / total) * 100;

  let message = '';
  if (percentage === 100) {
    message = "🌟 Excellent! Perfect Score!";
  } else if (percentage >= 70) {
    message = "👍 Good Job! You're Intermediate.";
  } else if (percentage >= 40) {
    message = "🙂 Keep Practicing! You can do better.";
  } else {
    message = "😔 Try Again! Don't give up!";
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Your Score: {score} / {total}</h1>
      <h2>{message}</h2>

      <h3>Answers:</h3>
      {answers.map((ans, idx) => (
        <p key={idx}>
          <strong>Q:</strong> {ans.question}<br />
          <strong>You selected:</strong> {ans.selected}<br />
          <strong>Correct answer:</strong> {ans.correct}
        </p>
      ))}

      <button
        onClick={() => navigate('/')}
        style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}
      >
        Play Again
      </button>
    </div>
  );
}

export default Result;
