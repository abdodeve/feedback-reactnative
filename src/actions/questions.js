import axios from "axios";

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

const storeAnswersApi = (arg1) => {
  return function (dispatch, getState) {
    return axios
      .get("1https://jsonplaceholder.typicode.com/todos/1")
      .then((data) => {
        dispatch(storeAnswers(data.data));
      })
      .catch((error) => {
        dispatch({ type: "STORE_ANSWERE_ERROR", error: error });
      });
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
