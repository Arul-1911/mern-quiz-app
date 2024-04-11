import React, { useState, useEffect } from "react";
import Questions from "./Questions";
import { MoveNextQuestion, MovePrevQuestion } from "./hooks/Fetch_question";
import { pushAnswer } from "./hooks/setResult";
import { Navigate } from "react-router-dom";

// Redux store import
import { useSelector, useDispatch } from "react-redux";

function Quiz() {
  const [check, setCheck] = useState(undefined);
  const [loading, setLoading] = useState(true); // State to track loading status

  const result = useSelector((state) => state.result.result);
  const { queue, trace } = useSelector((state) => state.questions);

  const dispatch = useDispatch();

  // Fetch questions when component mounts
  useEffect(() => {
    setLoading(true); // Set loading to true while questions are being fetched
    // Simulated async fetch of questions
    setTimeout(() => {
      setLoading(false); // Set loading to false when questions are fetched
    }, 1000); // Adjust the timeout as needed
  }, []);

  // Next button event handler
  function onNext() {
    if (trace < queue.length) {
      dispatch(MoveNextQuestion());

      // Insert a new result in the array
      if (result.length <= trace) {
        dispatch(pushAnswer(check));
      }
    }

    // Reset check variable
    setCheck(undefined);
  }

  // Prev button event handler
  function onPrev() {
    if (trace > 0) {
      dispatch(MovePrevQuestion());
    }
  }

  // Handle checkbox change
  function onChecked(check) {
    setCheck(check);
  }

  // After the last question, redirect to result page
  if (result.length && result.length >= queue.length) {
    return <Navigate to="/result" replace={true} />;
  }

  // Render loading screen while questions are being fetched
  if (loading) {
    return <div className="loading-screen">Loading...</div>;
  }

  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>

      {/* Questions component */}
      <Questions onChecked={onChecked} />

      <div className="grid">
        {trace > 0 ? (
          <button className="btn prev" onClick={onPrev}>
            Prev
          </button>
        ) : (
          <div></div>
        )}

        <button className="btn next" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Quiz;
