import React, { useEffect } from 'react';
import Questions from './Questions';

//redux store import
import { useSelector } from 'react-redux';

function Quiz() {

 const state = useSelector((state) => state);

 useEffect(() => {
  // console.log(state);
 },[])


  // next button event handler
  function onNext() {
    console.log("next");
  }
  // prev button event handler
  function onPrev() {
    console.log("prev");
  }
  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>

      {/* questions component */}
      <Questions/>

      <div className="grid">
        <button className="btn prev" onClick={onPrev}>
          Prev
        </button>
        <button className="btn next" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Quiz