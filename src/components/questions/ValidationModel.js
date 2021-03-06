import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import actions from "../../actions";

const ValidationModel = ({ questions, storeAnswersApi, ownProps }) => {
  return (
    <View style={styles.Screen}>
      <View style={styles.TitleView}>
        <Text style={styles.Title}>Thank you for your feedback</Text>
      </View>
      <TouchableOpacity
        style={styles.BtnValidate}
        onPress={async () => {
          storeAnswersApi(questions);
          console.log("questions===>", questions);
          // Go back to first Question {0}
          ownProps.changeQuestionState(() => {
            return 0;
          });
        }}
      >
        <Text style={styles.Submit}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state, ownProps) => ({
  questions: state.questions.questionsResponses,
  ownProps: ownProps,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addQuestion: (response) => {},
    storeAnswersApi: (response) => {
      dispatch(actions.questions.storeAnswersApi(response));
    },
    resetQuestions: () => {
      dispatch(actions.questions.resetQuestions());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ValidationModel);

const styles = StyleSheet.create({
  Screen: {
    justifyContent: "center", //Centered vertically
    alignItems: "center", // Centered horizontally
    flex: 1,
  },
  TitleView: {
    alignItems: "center",
    marginBottom: 10,
  },
  BtnValidate: {
    borderRadius: 35,
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
  Title: {
    color: "white",
    fontSize: 25,
  },
  Submit: {
    fontSize: 18,
  },
});
