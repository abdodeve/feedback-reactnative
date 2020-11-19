import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import actions from "../../../actions";

const SelectableEmojiQuestion = ({ addQuestion, ownProps }) => {
  const currentQuestion = ownProps.selectedResponseState.find(
    (obj) => obj.questionId === ownProps.questionId
  );
  /**
   * On click to Emoji for Select response
   * @param {*} questionId
   * @param {*} positionSelected
   */
  const onSelectResponse = (questionId, positionSelected) => {
    ownProps.setSelectedResponseState((currentState) => {
      const updatedState = currentState.map((elment) => {
        if (elment.questionId == questionId) {
          elment.positionSelected = positionSelected;
          return elment;
        }
        return elment;
      });
      return updatedState;
    });
  };

  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.Container}>
          <Text style={styles.Title}>{ownProps.label}</Text>
          <View style={styles.Wrapper}>
            <TouchableOpacity
              onPress={() => {
                onSelectResponse(ownProps.questionId, 0);
              }}
            >
              <Image
                style={[
                  styles.ImagContainer,
                  currentQuestion.positionSelected === 0
                    ? styles.Unabled
                    : styles.Disabled,
                ]}
                source={require("../../../../assets/images/Emoji/sad.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                onSelectResponse(ownProps.questionId, 1);
                ownProps.selectedResponseState.forEach((value) => {
                  addQuestion(value);
                });
              }}
            >
              <Image
                style={[
                  styles.ImagContainer,
                  currentQuestion.positionSelected === 1
                    ? styles.Unabled
                    : styles.Disabled,
                ]}
                source={require("../../../../assets/images/Emoji/confused.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                onSelectResponse(ownProps.questionId, 2);
                ownProps.selectedResponseState.forEach((value) => {
                  addQuestion(value);
                });
              }}
            >
              <Image
                style={[
                  styles.ImagContainer,
                  currentQuestion.positionSelected === 2
                    ? styles.Unabled
                    : styles.Disabled,
                ]}
                source={require("../../../../assets/images/Emoji/happy.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
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
  ImagContainer: {
    width: 60,
    height: 60,
    marginRight: 20,
    opacity: 0.5,
  },
  Disabled: {
    opacity: 0.5,
  },
  Unabled: {
    opacity: 1,
  },
  Title: {
    marginLeft: 20,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#fff",
  },
  Container: {
    flex: 1,
    marginBottom: 8,
  },
  Wrapper: { flexDirection: "row", marginLeft: 20 },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectableEmojiQuestion);
