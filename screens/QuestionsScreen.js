import * as React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from "react-native";
import MultipteQuestionsModel from "../components/questions/MultipteQuestionsModel";
import EmojiQuestionModel from "../components/questions/EmojiQuestionModel";
import YesOrNoModel from "../components/questions/YesOrNoModel";
import ValidationModel from "../components/questions/ValidationModel";
import { connect } from "react-redux";
import { addQuestions } from "../actions";
import UserInfoQuestionModel from "../components/questions/UserInfoQuestionModel";

import { AntDesign } from "@expo/vector-icons";

const QuestionsScreen = ({ questions, addQuestion }) => {
  const [questionState, setQuestionState] = React.useState(0);

  const NB_QUESTIONS = 3;
  const allQuestionsComponent = [
    // <YesOrNoModel />,
    // <YesOrNoModel />,
    <YesOrNoModel />,
    <EmojiQuestionModel
      nbQuestions={NB_QUESTIONS}
      currentQuestionState={questionState}
      changeQuestionState={setQuestionState}
    />,
    <ValidationModel />,
  ];

  return (
    <ImageBackground
      source={require("../assets/images/food.jpg")}
      style={styles.ImageBg}
    >
      <View style={styles.Overlay}>
        <View style={styles.container}>
          <TouchableOpacity>
            <AntDesign
              color="white"
              name="leftcircle"
              size={33}
              onPress={() => {
                console.log("clicked Before", questionState);
                console.log("state questions ===>", questions);
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
                console.log("clicked Next");
                // dispatch(addQuestions({ text1: "hello works" }));
                console.log("addQuestion===>", addQuestion);
                // addQuestion(123);
                // dispatch(addQuestions({ text1: "hello works" }));
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
        <View style={styles.ItemQuestion}>
          <Text>questionState: {questionState}</Text>
          {allQuestionsComponent[questionState]}
        </View>
      </View>
    </ImageBackground>
  );
};

const mapStateToProps = (state) => ({
  questions: state,
});

// const mapDispatchToProps = (dispatch) => ( {
//   addQuestion: () => dispatch(addQuestions({ text1: "hello works" })),
// });

const mapDispatchToProps = (dispatch) => {
  return {
    // addQuestion: (nb) => {
    //   dispatch(addQuestions({ text1: "hello works 111" }));
    // },
  };
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
  ItemQuestion: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
    marginVertical: 100,
    width: "100%",
    height: "100%",
  },
});
