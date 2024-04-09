import React from 'react';
import '../styles/result.css';
import { Link } from 'react-router-dom';
import ResultTable from './ResultTable';

function Result() {

  function onStart(){
    console.log('onStart')
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
        <span className='bold'>50</span>
      </div>
      <div className="flex">
        <span>Total Questions</span>
        <span className='bold'>05</span>
      </div>
      <div className="flex">
        <span>Total Attempts</span>
        <span className='bold'>03</span>
      </div>
      <div className="flex">
        <span>Total Earned Points : </span>
        <span className='bold'>30</span>
      </div>
      <div className="flex">
        <span>Quiz Result </span>
        <span className='bold'>Pass</span>
      </div>
    </div>

    <div className="start">
      <Link className='btn' to={'/'} onClick={onStart}>Restart</Link>
    </div>

    {/* result table */}
    <div className="container">
      <ResultTable></ResultTable>
    </div>

    </div>
  )
}

export default Result