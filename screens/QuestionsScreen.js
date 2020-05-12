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

import { AntDesign } from "@expo/vector-icons";
export default function QuestionsScreen(props) {
  const [questionState, setQuestionState] = React.useState(0);

  const allQuestionsComponent = [
    <EmojiQuestionModel />,
    <QuestionModel2 />,
    <YesOrNoModel />,
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
              name="rightcircle"
              size={32}
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
              name="leftcircle"
              color="white"
              size={32}
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
    height: "100%",
    width: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 10,
  },
  Overlay: {
    backgroundColor: "rgba(65, 87, 210, 0.67)",
    width: "100%",
    height: "100%",
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
