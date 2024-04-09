import { configureStore, combineReducers } from '@reduxjs/toolkit';

// call reducers
import  questionReducer  from './question_reducer';
import resultReducer  from './result_reducer';


const roorReducer = combineReducers({
   questions: questionReducer,
   result: resultReducer
})

// create store with reducer
export default configureStore({reducer:roorReducer})