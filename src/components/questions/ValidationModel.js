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
  // setTimeout(() => {
  //   props.changeQuestionState(() => {
  //     return props.currentQuestionState + 1;
  //   });
  // }, 3000);

  const [responseState, setResponseState] = React.useState({
    questionId: "1",
    questionType: "emoji",
    selectedResponse: null,
  });

  function validateAndGoNext() {
    if (props.currentQuestionState === props.nbQuestions - 1) return;
    props.changeQuestionState(() => {
      return props.currentQuestionState + 1;
    });
  }

  return (
    <View style={styles.Screen}>
      <View style={styles.ContainerTitle1}>
        <Text style={styles.title1}>Thank you for your feedback</Text>
        <TouchableOpacity>
          <Button
            title="Validate"
            onPress={() => {
              // console.log("123");
              // console.log(questions);
              // storeAnswersApi(questions);
              actions.questions.storeAnswersApi(questions);
            }}
          />
        </TouchableOpacity>
      </View>
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
      // dispatch(actions.questions.storeAnswersApi(response));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ValidationModel);

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  ContainerTitle1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  title1: {
    color: "white",
    fontSize: 52,
  },
  ContainerTitle2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    padding: 50,
  },
  title2: {
    color: "white",
    fontSize: 32,
  },
  Items: {
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "row",
    padding: 20,
    paddingLeft: 60,
  },
  ImagContainer: {
    width: 90,
    height: 90,
    marginRight: 20,
  },
});
