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

const YesOrNoModel = ({ questions, addQuestion, ownProps }) => {
  const [responseState, setResponseState] = React.useState({
    questionId: "2",
    questionType: "yesOrNo",
    selectedResponse: null,
  });

  return (
    <View>
      <Text style={styles.Title}>
        Great ! Want To Sign Up For Our Exclusive Email Offers ?
      </Text>

      <View style={styles.MainContent}>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => {
            const resp = { ...responseState, selectedResponse: 1 };
            addQuestion(resp);
            utils.questions.validateAndGoNext(ownProps);
          }}
        >
          <Text style={styles.Text}>Yes</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ ...styles.Button, ...styles.ButtonRed }}
          onPress={() => {
            const resp = { ...responseState, selectedResponse: 2 };
            addQuestion(resp);
            utils.questions.validateAndGoNext(ownProps);
          }}
        >
          <Text style={styles.Text}>No</Text>
        </TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(YesOrNoModel);

const styles = StyleSheet.create({
  Title: {
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: 25,
    paddingBottom: 50,
    fontWeight: "bold",
  },
  Button: {
    borderRadius: 35,
    backgroundColor: "green",
    height: 150,
    width: 180,
    margin: 12,
    alignItems: "center",
    padding: 35,
    borderColor: "red",
  },

  ButtonRed: {
    backgroundColor: "red",
  },

  Text: {
    color: "white",
    fontSize: 60,

    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  MainContent: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
