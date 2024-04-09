import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as Action from "../../Redux/question_reducer";
import data from "../../database/data";

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
          setApiData(question);
          dispatch(Action.startExamAction(question));
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
