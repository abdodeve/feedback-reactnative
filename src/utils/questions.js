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
// @param {nbQuestions, changeQuestionState} ownProps
