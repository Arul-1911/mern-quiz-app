import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'


//custom hook
import { useFetchQuestion } from './hooks/Fetch_question';
import { updateResult } from './hooks/setResult';

function Questions({ onChecked }) { 

   const [checked,setChecked] = useState(undefined);
   const { trace } = useSelector(state => state.questions);
   const result = useSelector(state => state.result.result)
  const { isLoading , apiData, serverError} = useFetchQuestion()


   const questions = useSelector(
     (state) => state.questions.queue[state.questions.trace]);
     const dispatch = useDispatch()

   useEffect(() => {
    dispatch(updateResult({trace, checked}))
   },[checked]);

   function onSelect(i){
      onChecked(i)
      setChecked(i)
       dispatch(updateResult({ trace, checked }));
   }

   if(isLoading){
    return <h3 className='text-light'>isLoading</h3>
   }

   if(serverError){
    return <h3 className="text-light">{serverError || 'Unknown Error'}</h3>;
   }

  return (
    <div className="questions">
      <h2 className="text-light">{questions?.question}</h2>

      <ul key={questions?.id}>
        {questions?.options.map((ques, index) => (
          <li key={index}>
            <input
              type="radio"
              value={true}
              name="options"
              id={`q${index}-option`}
              onChange={() => onSelect(index)}
            />

            <label className="text-primary" htmlFor={`q${index}-option`}>
             {ques}
            </label>
            <div className={`check ${result[trace] === index ? 'checked' : ''}`}></div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Questions