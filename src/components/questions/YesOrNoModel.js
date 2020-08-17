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
      <View style={styles.TitleView}>
        <Text style={styles.Title}>Was this meal value for money ?</Text>
      </View>

      <View style={styles.Items}>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => {
            const resp = { ...responseState, selectedResponse: 1 };
            addQuestion(resp);
            utils.questions.validateAndGoNext(ownProps);
          }}
        >
          <Text style={styles.BtnText}>Yes</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ ...styles.Button, ...styles.ButtonRed }}
          onPress={() => {
            const resp = { ...responseState, selectedResponse: 2 };
            addQuestion(resp);
            utils.questions.validateAndGoNext(ownProps);
          }}
        >
          <Text style={styles.BtnText}>No</Text>
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
