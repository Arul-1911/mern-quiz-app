import React, { useState, useEffect } from 'react';
import data from '../database/data';


//custom hook
import { useFetchQuestion } from './hooks/Fetch_question';



function Questions() {

   const [checked,setChecked] = useState(undefined);
  const { isLoading , apiData, serverError} = useFetchQuestion()
   const question = data[0];

   useEffect(() => {
      console.log(isLoading)
   },[isLoading])

   function onSelect(){
      // console.log('radio button change');
   }


  return (
    <div className="questions">
      <h2 className="text-light">{question.question}</h2>

      <ul key={question.id}>
        {question.options.map((ques, index) => (
          <li key={index}>
            <input
              type="radio"
              value={true}
              name="options"
              id={`q${index}-option`}
              onChange={onSelect}
            />

            <label className="text-primary" htmlFor={`q${index}-option`}>
             {ques}
            </label>
            <div className="check"></div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Questions