import React, { useEffect, useState } from 'react';
import Questions from './Questions';
import {MoveNextQuestion , MovePrevQuestion} from'./hooks/Fetch_question';
import { pushAnswer } from './hooks/setResult';
import { Navigate } from 'react-router-dom'

//redux store import
import { useSelector, useDispatch } from 'react-redux';


function Quiz() {

  const [check,setCheck] = useState(undefined)

 const result = useSelector((state) => state.result.result);
  const { queue , trace } = useSelector(state => state.questions)


 const dispatch = useDispatch()

  // next button event handler
  function onNext() {
    if(trace < queue.length){
         dispatch(MoveNextQuestion());

         //insert a new result in the array
       if(result.length <= trace){
          dispatch(pushAnswer(check));
       }
    }

    //result value of the checked variable
    setCheck(undefined)
  }
  // prev button event handler
  function onPrev() {
    if(trace > 0){
   dispatch(MovePrevQuestion())
    }
  }


  function onChecked(check){
    setCheck(check)
    console.log(check)
  }

  //after the last question
  if(result.length && result.length >= queue.length){
    return <Navigate to={"/result"} replace={true}></Navigate>;
  }


  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>

      {/* questions component */}
      <Questions onChecked={onChecked}/>

      <div className="grid">
        { trace > 0 ? 
        <button className="btn prev" onClick={onPrev}>
          Prev
        </button> 
        : <div></div>
        }
        
        <button className="btn next" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Quiz