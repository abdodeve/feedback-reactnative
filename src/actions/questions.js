import * as SecureStore from "expo-secure-store";

import { formatingQuestionsBeforeSending } from "../utils/questions";
import { connect } from "../utils/auth";

const addQuestions = (question) => ({
  type: "ADD_QUESTION",
  question,
});

const resetQuestions = () => ({
  type: "RESET_QUESTIONS",
});

const showQuestions = (text) => ({
  type: "SHOW_QUESTION",
  text,
});

const storeAnswers = (answer) => ({
  type: "STORE_ANSWER",
  answer,
});

const fetchUsers = (users) => ({
  type: "FETCH_USERS",
  users,
});

const storeAnswersApi = (arg1) => {
  return async (dispatch, getState) => {
    try {
      await connect();
      const idToken = await SecureStore.getItemAsync("idToken");
      const response = await fetch(
        "https://feedback-mobile-application.firebaseio.com/feedbacks.json?auth=" +
          idToken,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify({
            questionsResponses: formatingQuestionsBeforeSending(getState()),
          }),
        }
      );
      const resData = await response.json();
      dispatch(storeAnswers(resData));
      dispatch(resetQuestions());
      if (response.hasOwnProperty("ok") && response.ok == false)
        throw { message: "Request failed", details: JSON.stringify(response) };
    } catch (error) {
      dispatch({ type: "STORE_ANSWERE_ERROR", error: error });
    }
  };
};

export default {
  addQuestions,
  resetQuestions,
  showQuestions,
  storeAnswers,
  fetchUsers,
  storeAnswersApi,
};
