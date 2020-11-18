import React, { useState, useEffect } from "react";
// import CheckBox from "@react-native-community/checkbox";

import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import { Layout, Radio, RadioGroup, Text } from "@ui-kitten/components";
import { connect } from "react-redux";
import actions from "../../../actions";

const RadioQuestion = ({ addQuestion, ownProps }) => {
  const [yesChecked, setYesChecked] = React.useState(false);
  const [noChecked, setNoChecked] = React.useState(false);

  /**
   * On click to Emoji for Select response
   * @param {*} questionId
   * @param {*} positionSelected
   */
  const onSelectResponse = (questionId, responseSelected) => {
    ownProps.setSelectedResponseState((currentState) => {
      const updatedState = currentState.map((elment) => {
        if (elment.questionId == questionId) {
          elment.responseSelected = responseSelected;
          return elment;
        }
        return elment;
      });
      return updatedState;
    });
  };

  return (
    <View>
      <Text
        style={{
          marginLeft: 20,
          fontSize: 17,
          fontWeight: "bold",
          marginBottom: 5,
          color: "#fff",
        }}
      >
        {ownProps.label}
      </Text>
      <View style={{ flexDirection: "row", marginLeft: 20, flexWrap: "wrap" }}>
        <Radio
          style={styles.radio}
          status="success"
          checked={yesChecked}
          onChange={(nextChecked) => {
            if (nextChecked) {
              setYesChecked(nextChecked);
              setNoChecked(false);
              onSelectResponse(ownProps.questionId, "Yes");
            }
            ownProps.selectedResponseState.forEach((value) => {
              addQuestion(value);
            });
          }}
        >
          <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>
            Yes
          </Text>
        </Radio>
        <Radio
          style={styles.radio}
          status="danger"
          checked={noChecked}
          onChange={(nextChecked) => {
            if (nextChecked) {
              setNoChecked(nextChecked);
              setYesChecked(false);
              onSelectResponse(ownProps.questionId, "No");
            }
            ownProps.selectedResponseState.forEach((value) => {
              addQuestion(value);
            });
          }}
        >
          <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>
            No
          </Text>
        </Radio>
      </View>
    </View>
  );
};

const mapStateToProps = (state, ownProps) => ({
  ownProps: ownProps,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addQuestion: (response) => {
      dispatch(actions.questions.addQuestions(response));
    },
  };
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  radio: {
    margin: 2,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RadioQuestion);
