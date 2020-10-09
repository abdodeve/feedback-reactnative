import axios from "axios";
import { formatingQuestionsBeforeSending } from "../utils/questions";

const addQuestions = (question) => ({
  type: "ADD_QUESTION",
  question,
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

// const storeAnswersApi = (arg1) => {
//   return function (dispatch, getState) {
//     return axios
//       .get("https://jsonplaceholder.typicode.com/todos/1")
//       .then((data) => {
//         dispatch(storeAnswers(data.data));
//       })
//       .catch((error) => {
//         dispatch({ type: "STORE_ANSWERE_ERROR", error: error });
//       });
//   };
// };

const storeAnswersApi = (arg1) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        "https://feedback-mobile-application.firebaseio.com/feedbacks.json",
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
      if (response.hasOwnProperty("ok") && response.ok == false)
        throw { message: "Request failed", details: JSON.stringify(response) };
    } catch (error) {
      dispatch({ type: "STORE_ANSWERE_ERROR", error: error });
    }
  };
};

const fetchArticleDetails = (arg1) => {
  return function (dispatch, getState) {
    return axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((data) => {
        // console.log("data--->", data.data);
        dispatch(fetchUsers(data.data));
      });
  };
};

export default {
  addQuestions,
  showQuestions,
  storeAnswers,
  fetchUsers,
  storeAnswersApi,
  fetchArticleDetails,
};
