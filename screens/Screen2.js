import * as React from "react";
import { View, Text, Button } from "react-native";

export default function Screen2(props) {
  return (
    <View
      style={{
        backgroundColor: "green",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>This is Screen2</Text>
      <Button
        title="Change orientation"
        onPress={() => {
          console.log("clicked 2");
          //   changeScreenOrientation();
        }}
      />
    </View>
  );
}
