import * as React from "react";
import { View, Text, Button } from "react-native";
import EmojiQuestionModel from "../components/questions/EmojiQuestionModel";
import YesOrNoModel from "../components/questions/YesOrNoModel";

export default function QuestionsScreen(props) {
  const [questionState, setQuestionState] = React.useState(0);

  const allQuestionsComponent = [
    <EmojiQuestionModel />,
    <YesOrNoModel />,
    <EmojiQuestionModel />,
  ];

  return (
    <View
      style={{
        backgroundColor: "green",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {allQuestionsComponent[questionState]}

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Button
          title="Before"
          onPress={() => {
            console.log("clicked Before", questionState);
            if (questionState === 0) return;
            setQuestionState(() => {
              return questionState - 1;
            });
          }}
        />
        <Button
          title="Next"
          onPress={() => {
            console.log("clicked Next");
            if (questionState === allQuestionsComponent.length - 1) return;
            setQuestionState(() => {
              return questionState + 1;
            });
          }}
        />
      </View>
    </View>
  );
}
