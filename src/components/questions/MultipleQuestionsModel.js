import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import { connect } from "react-redux";
import actions from "../../actions";
import utils from "../../utils";
import SelectableEmojiQuestion from "./blocks/SelectableEmojiQuestion";

const MultipleQuestionsModel = ({ questions, addQuestion, ownProps }) => {
  const [selectedResponseState, setSelectedResponseState] = React.useState([
    {
      questionId: 0,
      positionSelected: 1,
    },
    {
      questionId: 1,
      positionSelected: 2,
    },
    {
      questionId: 2,
      positionSelected: 0,
    },
  ]);

  return (
    <View>
      <SelectableEmojiQuestion
        label="Question 1"
        questionId={0}
        selectedResponseState={selectedResponseState}
        setSelectedResponseState={setSelectedResponseState}
      />
      <SelectableEmojiQuestion
        label="Question 2"
        questionId={1}
        selectedResponseState={selectedResponseState}
        setSelectedResponseState={setSelectedResponseState}
      />
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
  TitleView: {
    alignItems: "center",
    marginBottom: 10,
  },
  Title: {
    color: "white",
    fontSize: 25,
  },
  Button: {
    borderRadius: 35,
    backgroundColor: "#2ed573",
    height: 150,
    width: 180,
    margin: 12,
    marginTop: 0,
    alignItems: "center",
    padding: 35,
  },
  Items: {
    flexDirection: "row",
    justifyContent: "center",
  },
  ButtonRed: {
    backgroundColor: "#ff4757",
  },
  BtnText: {
    color: "white",
    fontSize: 60,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});
