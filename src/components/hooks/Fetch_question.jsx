import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as Action from "../../Redux/question_reducer";
import data, { answers } from "../../database/data";

export const useFetchQuestion = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState([]);
  const [serverError, setServerError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    (async () => {
      try {
        let question = await data;

        if (question.length > 0) {
          setIsLoading(false);
          setApiData({ question, answers });
          dispatch(Action.startExamAction({ question, answers }));
        } else {
          throw new Error("No questions available");
        }
      } catch (error) {
        setIsLoading(false);
        setServerError(error);
      }
    })();
  }, [dispatch]);

  return { isLoading, apiData, serverError };
};

//move action dispatch next question function
export const MoveNextQuestion = () => async (dispatch) => {
  try {
    dispatch(Action.moveNextAction())
  } catch (error) {
    console.error(error)
  }
}

//move action dispatch prev question function
export const MovePrevQuestion = () => async (dispatch) => {
  try {
    dispatch(Action.movePrevAction())
  } catch (error) {
    console.error(error)
  }
}