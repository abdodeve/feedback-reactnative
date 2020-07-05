export const addQuestions = (question) => ({
  type: "ADD_QUESTION",
  question,
});

export const showQuestions = (text) => ({
  type: "SHOW_QUESTION",
  text,
});
