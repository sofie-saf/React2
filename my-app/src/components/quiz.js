import React, { useState } from "react";
import "./quiz.css";

const questions = [
    {
      question: "Hvilket dyr er det mest fluffy?",
      options: [
        { text: "Katt 😺", image: "/images/cat.jpg" },
        { text: "Hund 🐶", image: "/images/dog.jpg" },
        { text: "Kanin 🐰", image: "/images/bunny.jpg" },
        { text: "Sau 🐑", image: "/images/sheep.jpg" },
      ],
      answer: "Kanin 🐰",
      correctImage: "/images/bunny.jpg",
    },
    {
      question: "Hvilken farge har himmelen på en klar dag?",
      options: [
        { text: "Blå 💙", image: "/images/blue.jpg" },
        { text: "Rosa 💖", image: "/images/pink.jpg" },
        { text: "Grønn 💚", image: "/images/green.jpg" },
        { text: "Gul 💛", image: "/images/yellow.jpg" },
      ],
      answer: "Blå 💙",
      correctImage: "/images/blue.jpg",
    },
    {
      question: "Hvilken frukt er den søteste?",
      options: [
        { text: "Eple 🍏", image: "/images/apple.jpg" },
        { text: "Vannmelon 🍉", image: "/images/watermelon.jpg" },
        { text: "Banan 🍌", image: "/images/banana.jpg" },
        { text: "Mango 🥭", image: "/images/mango.jpg" },
      ],
      answer: "Mango 🥭",
      correctImage: "/images/mango.jpg",
    },
    {
      question: "Hvilken drikke er best for å våkne opp?",
      options: [
        { text: "Te 🍵", image: "/images/tea.jpg" },
        { text: "Melk 🥛", image: "/images/milk.jpg" },
        { text: "Kaffe ☕", image: "/images/coffe.jpg" },
        { text: "Juice 🧃", image: "/images/juice.jpg" },
      ],
      answer: "Kaffe ☕",
      correctImage: "/images/coffe.jpg",
    },
    {
      question: "Hvilket dyr er det raskeste?",
      options: [
        { text: "Gepard 🐆", image: "/images/cheetah.jpg" },
        { text: "Ørn 🦅", image: "/images/eagle.jpg" },
        { text: "Hest 🐎", image: "/images/horse.jpg" },
        { text: "Delfin 🐬", image: "/images/dolphin.jpg" },
      ],
      answer: "Gepard 🐆",
      correctImage: "/images/cheetah.jpg",
    },
    {
      question: "Hvilken planet er nærmest solen?",
      options: [
        { text: "Jorden 🌍", image: "/images/earth.jpg" },
        { text: "Mars 🔴", image: "/images/mars.jpg" },
        { text: "Merkur ☿", image: "/images/mercury.jpg" },
        { text: "Venus ♀", image: "/images/venus.jpg" },
      ],
      answer: "Merkur☿",
      correctImage: "/images/mercury.jpg",
    },
  ];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerClick = (selectedOption) => {
    setSelectedAnswer(selectedOption);
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer(null); // Reset the selected answer for next question
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="quiz-container">
      {showResult ? (
        <div className="result">
          <h2>Du fikk {score} av {questions.length} riktig! 🎉</h2>
          <button onClick={() => window.location.reload()} className="restart-button">
            Restart Quiz 🔄
          </button>
        </div>
      ) : (
        <div>
          <h2>{questions[currentQuestion].question}</h2>
          {selectedAnswer ? (
            <div className="answer-feedback">
              <h3>Riktig svar:</h3>
              <img
                src={questions[currentQuestion].correctImage}
                alt="Correct answer"
                className="correct-answer-image"
              />
              <button onClick={handleNextQuestion} className="next-button">
                Neste spørsmål
              </button>
            </div>
          ) : (
            <div className="options-container">
              {questions[currentQuestion].options.map((option) => (
                <button
                  key={option.text}
                  onClick={() => handleAnswerClick(option.text)}
                  className="option-button"
                >
                  <img
                    src={option.image}
                    alt={option.text}
                    className="option-image"
                  />
                  {option.text}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Quiz;
