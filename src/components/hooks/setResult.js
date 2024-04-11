import * as Action from '../../Redux/result_reducer';
import { postServerData } from "../../helper/helper";
import { backend_url } from '../../URL';

export const pushAnswer = (result) =>  async (dispatch) => {
   try {
      await dispatch(Action.pushResultAction(result))
   } catch (error) {
      console.log(error)
   }
}

export const updateResult = (index) => async (dispatch) => {
   try {
      dispatch(Action.updateResultAction(index))
   } catch (error) {
      console.log(error)
   }
}


export const usePublishResult = (resultData) => {
  // Check if resultData is defined
  if (!resultData) {
    console.error("resultData is undefined");
    return; // Return early if resultData is undefined
  }

  const { result, username } = resultData;

  (async () => {
    try {
      // Check if result is not empty and username is defined
      if (!result || !username) {
        throw new Error("Result or username is undefined");
      }

      // Proceed with data submission logic
      await postServerData(
        `${backend_url}/api/result`,
        resultData,
        (data) => data
      );
    } catch (error) {
      console.log(error);
    }
  })();
};
