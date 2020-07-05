const questions = (state = [], action) => {
  switch (action.type) {
    case "ADD_QUESTION":
      // Deny add duplicate of question
      // const isExist = state.find((o) => {
      //   if (
      //     o.question.questionId === action.question.questionId &&
      //     o.question.selectedResponse === action.question.selectedResponse
      //   ) {
      //     return true;
      //   }
      //   return false;
      // });
      // if (isExist) return state;
      const arr = state.filter(
        (item) => item.question.questionId !== action.question.questionId
      );
      console.log("state==========>", state);

      return [...arr, action];
    case "GET_ALL_QUESTIONS":
      return [...state, action];
    default:
      return state;
  }
};

export default questions;
