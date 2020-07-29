const initialState = {
  questionsResponses: [],
  storeResponse: { success: {}, error: {} },
};
const questions = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_QUESTION":
      console.log("state==========>", state);

      let myNewQuestionsResponses = [];

      // Check if questionsResponses is EMPTY
      if (state.questionsResponses.length == 0) {
        myNewQuestionsResponses.push(action);
      } else {
        // If the response already exist repalce it by the new one
        myNewQuestionsResponses = state.questionsResponses.filter((item) => {
          return item.question.questionId !== action.question.questionId;
        });
        myNewQuestionsResponses.push(action);
      }
      return {
        ...state,
        questionsResponses: myNewQuestionsResponses,
      };
    // console.log("ADD_QUESTION===>", state.questionsResponses);
    // return { ...state, action };
    case "GET_ALL_QUESTIONS":
      return [...state, action];
    case "STORE_ANSWER":
      console.log("STORE_ANSWER ==========>", state);
      return { ...state, storeResponse: action };
    case "STORE_ANSWERE_ERROR":
      console.log("STORE_ANSWERE_ERROR ==========>", state);
      return { ...state, STORE_ANSWERE_ERROR: action };
    default:
      return state;
  }
};

export default questions;
