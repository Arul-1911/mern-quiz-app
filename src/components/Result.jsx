import React, { useEffect } from 'react';
import '../styles/result.css';
import { Link } from 'react-router-dom';
import ResultTable from './ResultTable';
import { useDispatch , useSelector } from 'react-redux';
import {
  attemps_Number,
  earnPoints_Number,
  flagResult,
} from "../helper/helper";

//import Actions
import { resetAllAction } from '../Redux/question_reducer';
import { resetResultAction } from '../Redux/result_reducer';

function Result() {

  const disPatch = useDispatch()
  const {
    questions: { queue, answers },
    result: { result, userId },
  } = useSelector((state) => state);

  useEffect(() => {
    console.log(flag);
  })

const totalPoints = queue.length * 10;
const attempts = attemps_Number(result);
const earnPoints = earnPoints_Number(result,answers,10);
const flag = flagResult(totalPoints,earnPoints)


  function onRestart() {
    disPatch(resetAllAction())
    disPatch(resetResultAction())
  }

  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz Application</h1>

    <div className='result flex-center'>
      <div className="flex">
        <span>Username</span>
        <span className='bold'>Daily</span>
      </div>
      <div className="flex">
        <span>Total Quiz Points : </span>
        <span className='bold'>{totalPoints || 0}</span>
      </div>
      <div className="flex">
        <span>Total Questions</span>
        <span className='bold'>{queue.length || 0}</span>
      </div>
      <div className="flex">
        <span>Total Attempts</span>
        <span className='bold'>{attempts || 0}</span>
      </div>
      <div className="flex">
        <span>Total Earned Points : </span>
        <span className='bold'>{earnPoints || 0}</span>
      </div>
      <div className="flex">
        <span>Quiz Result </span>
        <span style={{color:`${flag ? '#2aff95': '#ff2a66'}`}} className='bold'>{flag ? "Pass" : "Fail"}</span>
      </div>
    </div>

    <div className="start">
      <Link className='btn' to={'/'} onClick={onRestart}>Restart</Link>
    </div>

    {/* result table */}
    <div className="container">
      <ResultTable></ResultTable>
    </div>

    </div>
  )
}

export default Result