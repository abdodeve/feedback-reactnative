import * as React from "react";
import {
  View,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from "react-native";
import EmojiQuestionModel from "../components/EmojiQuestionModel";
import QuestionModel2 from "../components/QuestionModel2";

import { AntDesign } from "@expo/vector-icons";
export default function QuestionsScreen(props) {
  const [questionState, setQuestionState] = React.useState(0);

  const allQuestionsComponent = [
    <EmojiQuestionModel />,
    <QuestionModel2 />,
    <EmojiQuestionModel />,
  ];

  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/images/1.jpg")}
      style={styles.ImageBg}
    >
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
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  ImageBg: {
    height: "100%",
    width: "100%",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    height: 15,
    width: "100%",
    flex: 1,
    overflow: "hidden",
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
