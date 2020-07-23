import axios from "axios";

export const addQuestions = (question) => ({
  type: "ADD_QUESTION",
  question,
});

export const showQuestions = (text) => ({
  type: "SHOW_QUESTION",
  text,
});

export const storeAnswers = (answer) => ({
  type: "STORE_ANSWER",
  answer,
});

export const fetchUsers = (users) => ({
  type: "FETCH_USERS",
  users,
});

export const storeAnswersApi = (arg1) => {
  return function (dispatch, getState) {
    return axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((data) => {
        console.log("getState--->", getState());
        dispatch(storeAnswers(data.data));
      });
  };
};

export const fetchArticleDetails = (arg1) => {
  return function (dispatch, getState) {
    return axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((data) => {
        // console.log("data--->", data.data);
        dispatch(fetchUsers(data.data));
      });
  };
};
