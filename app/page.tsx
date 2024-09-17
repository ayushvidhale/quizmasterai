"use client";
import { useState } from "react";
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
  const [numQuestions, setNumQuestions] = useState(10);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [marks, setMarks] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [testDate, setTestDate] = useState<string | null>(null);

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
  };

  const renderContent = (text: string) => {
    const codeBlockMatch = /```(.*?)```/gs;
    if (codeBlockMatch.test(text)) {
      const parts = text.split(codeBlockMatch);
      return parts.map((part, index) => {
        if (index % 2 === 1) {
          return (
            <SyntaxHighlighter key={index} language="javascript" style={atomOneLight}>
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

  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen flex flex-col lg:flex-row">
      <div className="flex-1 p-4">
        <h1 className="text-4xl font-bold mb-4">Coding Question Generator</h1>
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl border border-gray-300">
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
            className="bg-blue-600 text-white p-3 rounded-lg w-full"
          >
            {loading ? "Generating..." : "Generate Questions"}
          </button>
        </div>
        <br />
        {questions.length > 0 && (
          <>
            {questions.map((q, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg mb-4 w-full max-w-lg shadow-md border border-gray-200"
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
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                        />
                        <label htmlFor={`${index}-${key}`} className="ml-2">
                          {renderContent(option)}
                        </label>
                      </div>
                    </li>
                  ))}
                </ul>

                {marks !== null && (
                  <div
                    className={`mt-4 p-3 rounded-lg ${
                      userAnswers[index] === q.answer
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {userAnswers[index] === q.answer ? (
                      <>
                        <span className="font-bold">Correct! </span>
                        {q.options[q.answer]} - {q.explanation || "Good job!"}
                      </>
                    ) : (
                      <>
                        <span className="font-bold">Incorrect! </span>
                        The correct answer is {q.options[q.answer]}. Explanation:{" "}
                        {q.explanation}
                      </>
                    )}
                  </div>
                )}
              </div>
            ))}
            <button
              onClick={calculateMarks}
              className="bg-green-600 text-white p-3 rounded-lg mt-6"
            >
              Submit Answers
            </button>
            {marks !== null && (
              <div className="mt-6 text-lg">
                <p>Total Marks: {marks} / {questions.length}</p>
                <p>Accuracy: {accuracy.toFixed(2)}%</p>
              </div>
            )}
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-600 text-white p-3 rounded-lg mt-6"
            >
              Create More Tests
            </button>
          </>
        )}
      </div>
      {questions.length > 0 && (
        <div className="lg:w-1/3 lg:sticky lg:top-0 p-4 bg-white shadow-lg border border-gray-300">
          <h2 className="text-2xl font-bold mb-4">Test Summary</h2>
          <div className="bg-gray-100 p-4 rounded-lg mb-4 shadow-md border border-gray-200">
            <p><strong>Date and Time:</strong> {testDate}</p>
            <p><strong>Test Type:</strong> {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}</p>
            <p><strong>Number of Questions:</strong> {numQuestions}</p>
            <p><strong>Accuracy:</strong> {accuracy.toFixed(2)}%</p>
          </div>
        </div>
      )}
    </div>
  );
}
