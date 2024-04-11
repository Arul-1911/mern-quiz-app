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


//insert user data
export const usePublishResult = (resultData) => {
  const { result, username } = resultData;
  (async () => {
    try {
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
