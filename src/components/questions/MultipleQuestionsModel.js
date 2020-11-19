import * as React from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";

import actions from "../../actions";
import SelectableEmojiQuestion from "./blocks/SelectableEmojiQuestion";
import RadioQuestion from "./blocks/RadioQuestion";
import ContactForm from "./blocks/ContactForm";

const MultipleQuestionsModel = ({ questions, addQuestion, ownProps }) => {
  const [selectedResponseState, setSelectedResponseState] = React.useState([
    {
      questionId: "MultipleQuestionsModel-selectableEmoji-0",
      questionType: "selectableEmoji",
      positionSelected: 1,
    },
    {
      questionId: "MultipleQuestionsModel-selectableEmoji-1",
      questionType: "selectableEmoji",
      positionSelected: 1,
    },
    {
      questionId: "MultipleQuestionsModel-selectableEmoji-2",
      questionType: "selectableEmoji",
      positionSelected: 1,
    },
    {
      questionId: "MultipleQuestionsModel-selectableEmoji-3",
      questionType: "selectableEmoji",
      positionSelected: 1,
    },
    {
      questionId: "MultipleQuestionsModel-radio-4",
      questionType: "radio",
      responseSelected: false,
    },
    {
      questionId: "MultipleQuestionsModel-selectableEmoji-6",
      questionType: "radio",
      responseSelected: false,
    },
    {
      questionId: "MultipleQuestionsModel-ContactForm-7",
      questionType: "contactForm",
      data: {
        comments: "",
        fullname: "",
        email: "",
        phone: "",
        isNewsletterChecked: "",
      },
    },
  ]);

  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View style={[styles.column]}>
        <View>
          <SelectableEmojiQuestion
            label="SERVICE"
            questionId={selectedResponseState[0].questionId}
            selectedResponseState={selectedResponseState}
            setSelectedResponseState={setSelectedResponseState}
          />
        </View>
        <View>
          <SelectableEmojiQuestion
            label="FOOD"
            questionId={selectedResponseState[1].questionId}
            selectedResponseState={selectedResponseState}
            setSelectedResponseState={setSelectedResponseState}
          />
        </View>
        <View>
          <RadioQuestion
            label="Was this meal value for money ?"
            questionId={selectedResponseState[4].questionId}
            selectedResponseState={selectedResponseState}
            setSelectedResponseState={setSelectedResponseState}
          />
        </View>
        <View>
          <RadioQuestion
            label="Would you recommend us ?"
            questionId={selectedResponseState[5].questionId}
            selectedResponseState={selectedResponseState}
            setSelectedResponseState={setSelectedResponseState}
          />
        </View>
      </View>
      <View style={[styles.column]}>
        <ContactForm
          questionId={selectedResponseState[6].questionId}
          selectedResponseState={selectedResponseState}
          setSelectedResponseState={setSelectedResponseState}
        />
      </View>
    </View>
  );
};

const mapStateToProps = (state, ownProps) => ({
  questions: state,
  ownProps: ownProps,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addQuestion: (response) => {
      dispatch(actions.questions.addQuestions(response));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MultipleQuestionsModel);

const styles = StyleSheet.create({
  column: {
    width: "50%",
  },
});
