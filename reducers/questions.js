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
      console.log("state==========>", state);
      const arr = state.filter((item) => {
        if (item.question) return false;
        return item.question.questionId !== action.question.questionId;
      });
      return [...arr, action];
    // return { ...state, questions_ABDO: action };
    case "GET_ALL_QUESTIONS":
      return [...state, action];
    case "STORE_ANSWER":
      console.log("STORE_ANSWER ==========>", state);
      return { ...state, STORE_ANSWER: action };
    default:
      return state;
  }
};

export default questions;
