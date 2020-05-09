import { Ionicons } from "@expo/vector-icons";
import * as React from "react";
import { View, Text, Button } from "react-native";

import Colors from "../constants/Colors";

export default function EmojiQuestionModel(props) {
  return (
    <View>
      <View
        style={{
          // alignItems: "center",
          // justifyContent: "center",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ marginRight: 60 }}>Angry</Text>
        <Text style={{ marginRight: 60 }}>Not Angry</Text>
        <Text style={{ marginRight: 60 }}>Normale</Text>
        <Text style={{ marginRight: 60 }}>Smile</Text>
        <Text style={{ marginRight: 60 }}>Happy</Text>
      </View>
    </View>
  );
}
