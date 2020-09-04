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
import { addQuestions, storeAnswersApi } from "../../actions";
import actions from "../../actions";

const ValidationModel = ({ questions, storeAnswersApi }) => {
  const [responseState, setResponseState] = React.useState({
    questionId: "1",
    questionType: "emoji",
    selectedResponse: null,
  });

  return (
    <View style={styles.Screen}>
      <View style={styles.TitleView}>
        <Text style={styles.Title}>Thank you for your feedback</Text>
      </View>
      <TouchableOpacity
        style={styles.BtnValidate}
        onPress={() => {
          // actions.questions.storeAnswersApi(questions);
          storeAnswersApi(questions);
        }}
      >
        <Text style={styles.Submit}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state) => ({
  questions: state.questions.questionsResponses,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addQuestion: (response) => {
      // dispatch(actions.questions.addQuestions(response));
    },
    storeAnswersApi: (response) => {
      dispatch(actions.questions.storeAnswersApi(response));
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
