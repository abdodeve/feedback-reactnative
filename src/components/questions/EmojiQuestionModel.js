import * as React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import actions from "../../actions";
import utils from "../../utils";

const EmojiQuestionModel = ({ questions, addQuestion, ownProps }) => {
  const [responseState, setResponseState] = React.useState({
    questionId: `EmojiQuestionModel-emoji-${Date.now()}`,
    questionType: "emoji",
    selectedResponse: null,
  });

  return (
    <View style={styles.Screen}>
      <View style={styles.TitleView}>
        <Text style={styles.Title}>{ownProps.Title}</Text>
      </View>

      <View style={styles.Items}>
        <TouchableOpacity
          onPress={() => {
            const resp = { ...responseState, selectedResponse: 1 };
            addQuestion(resp);
            utils.questions.validateAndGoNext(ownProps);
          }}
        >
          <Image
            style={styles.ImagContainer}
            source={require("../../../assets/images/Emoji/emoji-level-1.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            const resp = { ...responseState, selectedResponse: 2 };
            addQuestion(resp);
            utils.questions.validateAndGoNext(ownProps);
          }}
        >
          <Image
            style={styles.ImagContainer}
            source={require("../../../assets/images/Emoji/emoji-level-2.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            const resp = { ...responseState, selectedResponse: 3 };
            addQuestion(resp);
            utils.questions.validateAndGoNext(ownProps);
          }}
        >
          <Image
            style={styles.ImagContainer}
            source={require("../../../assets/images/Emoji/emoji-level-3.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            const resp = { ...responseState, selectedResponse: 4 };
            addQuestion(resp);
            utils.questions.validateAndGoNext(ownProps);
          }}
        >
          <Image
            style={styles.ImagContainer}
            source={require("../../../assets/images/Emoji/emoji-level-4.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            const resp = { ...responseState, selectedResponse: 5 };
            addQuestion(resp);
            utils.questions.validateAndGoNext(ownProps);
          }}
        >
          <Image
            style={styles.ImagContainer}
            source={require("../../../assets/images/Emoji/emoji-level-5.png")}
          />
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

export default connect(mapStateToProps, mapDispatchToProps)(EmojiQuestionModel);

const styles = StyleSheet.create({
  TitleView: {
    alignItems: "center",
    marginBottom: 10,
  },
  Title: {
    color: "white",
    fontSize: 25,
  },
  Items: {
    flexDirection: "row",
    justifyContent: "center",
  },
  ImagContainer: {
    width: 90,
    height: 90,
    marginRight: 20,
  },
});
