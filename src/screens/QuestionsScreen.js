import * as React from "react";
import {
  View,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  StatusBar,
} from "react-native";
import EmojiQuestionModel from "../components/questions/EmojiQuestionModel";
import YesOrNoModel from "../components/questions/YesOrNoModel";
import MultipleQuestionsModel from "../components/questions/MultipleQuestionsModel";
import ValidationModel from "../components/questions/ValidationModel";
import { connect } from "react-redux";

import { AntDesign } from "@expo/vector-icons";

const QuestionsScreen = () => {
  const [questionState, setQuestionState] = React.useState(0);

  const NB_QUESTIONS = 4;
  const allQuestionsComponent = [
    <YesOrNoModel
      nbQuestions={NB_QUESTIONS}
      currentQuestionState={questionState}
      changeQuestionState={setQuestionState}
    />,
    <EmojiQuestionModel
      Title="Please Rate the Waiter"
      nbQuestions={NB_QUESTIONS}
      currentQuestionState={questionState}
      changeQuestionState={setQuestionState}
    />,
    <MultipleQuestionsModel
      nbQuestions={NB_QUESTIONS}
      currentQuestionState={questionState}
      changeQuestionState={setQuestionState}
    />,
    <ValidationModel
      nbQuestions={NB_QUESTIONS}
      currentQuestionState={questionState}
      changeQuestionState={setQuestionState}
    />,
  ];

  return (
    <ImageBackground
      source={require("../../assets/images/food.jpg")}
      style={styles.ImageBg}
    >
      <View style={styles.Overlay}>
        <StatusBar hidden={true} />
        <View style={styles.container}>
          <TouchableOpacity>
            <AntDesign
              title="[previous]"
              color="white"
              name="leftcircle"
              size={33}
              onPress={() => {
                if (questionState <= 0) return;
                if (questionState > 0) {
                  setQuestionState(() => {
                    return questionState - 1;
                  });
                }
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign
              title="next"
              name="rightcircle"
              color="white"
              size={33}
              onPress={() => {
                if (questionState === allQuestionsComponent.length - 1) return;
                if (questionState < allQuestionsComponent.length - 1) {
                  setQuestionState(() => {
                    return questionState + 1;
                  });
                }
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.ItemsQuestion}>
          {allQuestionsComponent[questionState]}
        </View>
      </View>
    </ImageBackground>
  );
};

const mapStateToProps = (state) => ({
  questions: state,
});

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsScreen);

const styles = StyleSheet.create({
  ImageBg: {
    //height: "100%",
    width: "100%",
    flex: 1,
  },

  Overlay: {
    backgroundColor: "rgba(65, 87, 210, 0.67)",
    width: "100%",
    height: "100%",
  },
  container: {
    //flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 10,
  },
  ItemsQuestion: {
    justifyContent: "center",
    flex: 1,
  },
});
