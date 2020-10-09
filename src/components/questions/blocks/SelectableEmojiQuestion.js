import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";

const SelectableEmojiQuestion = (props) => {
  /**
   * On click to Emoji for Select response
   * @param {*} questionId
   * @param {*} positionSelected
   */
  const onSelectResponse = (questionId, positionSelected) => {
    props.setSelectedResponseState((currentState) => {
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
        <View style={{ flex: 1, backgroundColor: "powderblue" }}>
          <Text>{props.label} - aaaaa</Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => {
                onSelectResponse(props.questionId, 0);
              }}
            >
              <Image
                style={[
                  styles.ImagContainer,
                  props.selectedResponseState[props.questionId]
                    .positionSelected === 0
                    ? styles.Unabled
                    : styles.Disabled,
                ]}
                source={require("../../../../assets/images/Emoji/sad.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                onSelectResponse(props.questionId, 1);
              }}
            >
              <Image
                style={[
                  styles.ImagContainer,
                  props.selectedResponseState[props.questionId]
                    .positionSelected === 1
                    ? styles.Unabled
                    : styles.Disabled,
                ]}
                source={require("../../../../assets/images/Emoji/confused.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                onSelectResponse(props.questionId, 2);
              }}
            >
              <Image
                style={[
                  styles.ImagContainer,
                  props.selectedResponseState[props.questionId]
                    .positionSelected === 2
                    ? styles.Unabled
                    : styles.Disabled,
                ]}
                source={require("../../../../assets/images/Emoji/happy.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 1, height: 50, backgroundColor: "skyblue" }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ImagContainer: {
    width: 90,
    height: 90,
    marginRight: 20,
    opacity: 0.5,
  },
  Disabled: {
    opacity: 0.5,
  },
  Unabled: {
    opacity: 1,
  },
});

export default SelectableEmojiQuestion;
