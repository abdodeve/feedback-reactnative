/**
 * validateAndGoNext
 * @param {{nbQuestions: number, currentQuestionState: number, currentQuestionState: void }} ownProps all props
 */
export const validateAndGoNext = (ownProps) => {
  if (ownProps.currentQuestionState === ownProps.nbQuestions - 1) return;
  ownProps.changeQuestionState(() => {
    return ownProps.currentQuestionState + 1;
  });
};

/**
 * Prepare and formate data before send it to Server
 * @param {Object} state
 */
export const formatingQuestionsBeforeSending = (state) => {
  return state.questions.questionsResponses.map(function (currentValue) {
    return currentValue.question;
  });
};
