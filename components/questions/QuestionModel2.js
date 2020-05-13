import * as React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function QuestionModel2(props) {
  return (
    <View style={styles.Screen}>
      <View style={styles.ContainerTitle1}>
        <Text style={styles.title1}>WELCOME</Text>
      </View>
      <View style={styles.ContainerTitle2}>
        <Text style={styles.title2}>Please Rate Our Service</Text>
      </View>

      <View style={styles.Items}>
        <TouchableOpacity>
          <Image
            style={styles.ImagContainer}
            source={require("../../assets/images/Emoji/star5.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.ImagContainer}
            source={require("../../assets/images/Emoji/star4.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.ImagContainer}
            source={require("../../assets/images/Emoji/star3.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            style={styles.ImagContainer}
            source={require("../../assets/images/Emoji/star2.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  ContainerTitle1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  title1: {
    color: "white",
    fontSize: 52,
  },
  ContainerTitle2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    padding: 50,
  },
  title2: {
    color: "white",
    fontSize: 32,
  },
  Items: {
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "row",
    padding: 20,
    paddingLeft: 60,
  },
  ImagContainer: {
    width: 90,
    height: 90,
    marginRight: 20,
  },
});
