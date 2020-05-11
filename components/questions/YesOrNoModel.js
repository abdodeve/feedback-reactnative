import { Ionicons } from "@expo/vector-icons";
import * as React from "react";
import { View, Text, Button } from "react-native";

import Colors from "../../constants/Colors";

export default function YesOrNoModel(props) {
  return (
    <View>
      <View>
        <Text>Would you like recommende us to others ?</Text>
      </View>
      <View
        style={{
          // alignItems: "center",
          // justifyContent: "center",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ marginRight: 60 }}>Angry1</Text>
        <Text style={{ marginRight: 60 }}>Not Angry</Text>
        <Text style={{ marginRight: 60 }}>Normale</Text>
        <Text style={{ marginRight: 60 }}>Smile</Text>
        <Text style={{ marginRight: 60 }}>Happy</Text>
      </View>
    </View>
  );
}
