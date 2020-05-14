import * as React from "react";
import {
  View,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from "react-native";
import EmojiQuestionModel from "../components/questions/EmojiQuestionModel";
import QuestionModel2 from "../components/questions/QuestionModel2";
import YesOrNoModel from "../components/questions/YesOrNoModel";
import UserInfoQuestionModel from "../components/questions/UserInfoQuestionModel";

import { AntDesign } from "@expo/vector-icons";
export default function QuestionsScreen(props) {
  const [questionState, setQuestionState] = React.useState(0);

  const allQuestionsComponent = [
    <UserInfoQuestionModel />,
    <YesOrNoModel />,
    <EmojiQuestionModel />,
    <QuestionModel2 />,
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
                if (questionState === 0) return;
                setQuestionState(() => {
                  return questionState - 1;
                });
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign
              title="befor"
              name="rightcircle"
              color="white"
              size={33}
              onPress={() => {
                console.log("clicked Next");
                if (questionState === allQuestionsComponent.length - 1) return;
                setQuestionState(() => {
                  return questionState + 1;
                });
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.ItemQuestion}>
          {allQuestionsComponent[questionState]}
        </View>
      </View>
    </ImageBackground>
  );
}
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
