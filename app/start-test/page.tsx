"use client";
import { useState, useEffect } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneLight } from "react-syntax-highlighter/dist/esm/styles/hljs"; // Light mode syntax highlighting

interface Option {
  [key: string]: string;
}

interface Question {
  question: string;
  options: Option;
  answer: string;
  explanation: string;
}

export default function Home() {
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");
  const [difficulty, setDifficulty] = useState("easy");
  const [numQuestions, setNumQuestions] = useState(5);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [marks, setMarks] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [testDate, setTestDate] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false); // Track if test is submitted
  const [timer, setTimer] = useState<number>(0); // Timer state
  const [timerRunning, setTimerRunning] = useState(false); // Track timer
  const [timeColor, setTimeColor] = useState<string>(""); // Time color

  // Timer Effect
  useEffect(() => {
    if (timerRunning && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      if (timer <= 60)
        setTimeColor("text-red-600"); // Change color to red for the last minute
      else setTimeColor(""); // Reset color

      return () => clearInterval(interval);
    } else if (timer === 0 && timerRunning) {
      calculateMarks();
      setTimerRunning(false); // Ensure timer stops at 0
    }
  }, [timer, timerRunning]);

  const handleSubmit = async () => {
    setLoading(true);
    setTestDate(new Date().toLocaleString()); // Set test date and time
    try {
      const response = await fetch("/api/generateQuestions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic, description, difficulty, numQuestions }),
      });
      const data = await response.json();
      setQuestions(data.questions);
      setUserAnswers({});
      setMarks(null);
      setSubmitted(false); // Reset submission status
      setTimer(numQuestions * 60); // Set timer based on number of questions
      setTimerRunning(true); // Start the timer
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAnswerChange = (questionIndex: number, option: string) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: option,
    }));
  };

  const calculateMarks = () => {
    const score = questions.reduce((total, question, index) => {
      return total + (userAnswers[index] === question.answer ? 1 : 0);
    }, 0);
    setMarks(score);
    setSubmitted(true); // Set submission status to true
    setTimerRunning(false); // Stop the timer
  };

  const renderContent = (text: string) => {
    const codeBlockMatch = /```(.*?)```/gs;
    if (codeBlockMatch.test(text)) {
      const parts = text.split(codeBlockMatch);
      return parts.map((part, index) => {
        if (index % 2 === 1) {
          return (
            <SyntaxHighlighter
              key={index}
              language="javascript"
              style={atomOneLight}
            >
              {part}
            </SyntaxHighlighter>
          );
        }
        return <span key={index}>{part}</span>;
      });
    }
    return text;
  };

  const accuracy = marks !== null ? (marks / questions.length) * 100 : 0;

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}`;
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 bg-gray-900 text-white p-4 flex justify-between items-center shadow-md z-50">
        <div className="flex">
          <h1 className="text-xl font-bold my-auto mr-2">Quiz Master AI</h1>
          {timerRunning && (
            <div className={`ml-4 text-xl font-bold ${timeColor}`}>
              Time Remaining: {formatTime(timer)}
            </div>
          )}
        </div>
        <div className="flex items-center">
          <button
            onClick={() => window.location.reload()} // Refresh page after test creation
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-30"
          >
            Create New Test
          </button>
        </div>
      </div>

      <div className="bg-gray-50 text-gray-900 min-h-screen pt-16 flex flex-col lg:flex-row lg:space-x-4">
        {/* Left Side (Questions) */}
        <div className="lg:w-3/4 p-4">
          {questions.length === 0 && (
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl border border-gray-300">
              {/* Form for topic, description, difficulty, and number of questions */}
              <input
                type="text"
                placeholder="Topic Name"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="bg-gray-200 text-gray-900 p-3 mb-4 w-full rounded-lg"
              />
              <textarea
                placeholder="Additional Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="bg-gray-200 text-gray-900 p-3 mb-4 w-full rounded-lg"
                rows={4}
              />
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                className="bg-gray-200 text-gray-900 p-3 mb-4 w-full rounded-lg"
              >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
              <select
                value={numQuestions}
                onChange={(e) => setNumQuestions(parseInt(e.target.value))}
                className="bg-gray-200 text-gray-900 p-3 mb-4 w-full rounded-lg"
              >
                <option value={5}>5 Questions</option>
                <option value={10}>10 Questions</option>
                <option value={20}>20 Questions</option>
                <option value={30}>30 Questions</option>
              </select>
              <button
                onClick={handleSubmit}
                disabled={submitted} // Disable button if submitted
                className="bg-purple-600 text-white p-3 rounded-lg w-full"
              >
                {loading ? "Generating..." : "Generate Questions"}
              </button>
            </div>
          )}
          <br />
          {questions.map((q, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg mb-4 w-full shadow-md border border-gray-200"
            >
              <h3 className="font-semibold text-lg">
                {index + 1}. {renderContent(q.question)}
              </h3>
              <ul className="w-full text-sm font-medium text-gray-900 bg-gray-100 border border-gray-200 rounded-lg mt-2">
                {Object.entries(q.options).map(([key, option]) => (
                  <li
                    key={key}
                    className="w-full border-b border-gray-200 last:border-none"
                  >
                    <div className="flex items-center px-3 py-2">
                      <input
                        type="radio"
                        id={`${index}-${key}`}
                        name={`question-${index}`}
                        value={key}
                        checked={userAnswers[index] === key}
                        onChange={() => handleAnswerChange(index, key)}
                        disabled={submitted} // Disable options if submitted
                        className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 focus:ring-2"
                      />
                      <label htmlFor={`${index}-${key}`} className="ml-2">
                        {renderContent(option)}
                      </label>
                    </div>
                  </li>
                ))}
              </ul>
              {submitted && (
                <div
                  className={`mt-4 p-3 rounded-lg ${
                    userAnswers[index] === q.answer
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {userAnswers[index] === q.answer ? (
                    <>
                      <span className="font-bold">Correct!</span> +1
                    </>
                  ) : (
                    <>
                      <span className="font-bold">Incorrect.</span> 0
                    </>
                  )}
                  <br />
                  <span className="font-medium">Explanation:</span>{" "}
                  {renderContent(q.explanation)}
                </div>
              )}
            </div>
          ))}
          {questions.length > 0 && !submitted && (
            <button
              onClick={calculateMarks}
              className="bg-purple-600 text-white p-3 rounded-lg w-full mt-4"
            >
              Submit Test
            </button>
          )}
        </div>

        {/* Right Side (Test Summary) */}
        <div className="lg:w-1/4 p-4 fixed top-20 right-2">
          {submitted && marks !== null && (
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h3 className="font-bold text-lg mb-2">Test Results</h3>
              <p>
                You scored <span className="font-bold">{marks}</span> out of{" "}
                {questions.length} ({accuracy.toFixed(2)}% accuracy).
              </p>
              <div className="mt-4">
                <div className="text-sm font-medium text-gray-700 mb-2">
                  Accuracy : {accuracy.toFixed(2)} points
                </div>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <span className="text-xs font-medium text-gray-700">
                      0%
                    </span>
                    <span className="text-xs font-medium text-gray-700">
                      100%
                    </span>
                  </div>
                  <div className="flex-1 bg-gray-200 h-2 rounded">
                    <div
                      className="bg-green-500 h-full rounded"
                      style={{ width: `${accuracy.toFixed(2)}%` }}
                    />
                  </div>
                </div>
              </div>
              <p className="text-gray-500 mt-2">
                Test completed on: {testDate}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
