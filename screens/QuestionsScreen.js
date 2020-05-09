import * as React from "react";
import { View, Text, Button } from "react-native";
import QuestionModel1 from "../components/QuestionModel1";
import QuestionModel2 from "../components/QuestionModel2";

export default function QuestionsScreen(props) {
  const [questionState, setQuestionState] = React.useState(0);

  const allQuestionsComponent = [
    <QuestionModel1 />,
    <QuestionModel2 />,
    <QuestionModel1 />,
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
  );
}
