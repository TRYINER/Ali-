const ResultSlide = ({ answers, user }) => {
  const calculateScore = () => {
    const totalQuestions = answers.length;
    let correctCount = 0;

    answers.forEach((answerObj) => {
      const userAnswer = answerObj.answer.toLowerCase();
      const correctAnswer = answerObj.correctAnswer.toLowerCase();

      if (userAnswer === correctAnswer) {
        correctCount++;
      }
    });

    const score = (correctCount / totalQuestions) * 100;
    return score.toFixed(2);
  };

  const generateFriendlyMessage = () => {
    const score = calculateScore();
    if (score >= 70) {
      return `Great job! Your score is ${score}%. Keep up the good work!`;
    } else if (score >= 40) {
      return `Not bad! Your score is ${score}%. Keep practicing to improve.`;
    } else {
      return `Your score is ${score}%. Keep practicing to improve.`;
    }
  };

  return (
    <div>
      <h2>{user && user.name} your result</h2>
      <p>{generateFriendlyMessage()}</p>
      <ul>
        {answers.map((answerObj, index) => (
          <li key={index}>
            Question {index + 1}:{" "}
            {answerObj.answer === answerObj.correctAnswer
              ? "Correct"
              : "Incorrect"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResultSlide;
