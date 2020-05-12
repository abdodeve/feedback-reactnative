import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";

export default function YesOrNoModel(props) {
  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity style={styles.Container}>
        <Text style={styles.Text}>Yes</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.Container2}>
        <Text style={styles.Text}>No</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    borderRadius: 70,
    backgroundColor: "rgba(25, 131, 17, 0.7)",
    height: 150,
    width: 150,
    margin: 12,
    alignItems: "center",
    padding: 35,
    borderColor: "red",
  },

  Container2: {
    borderRadius: 70,
    backgroundColor: "rgba(131, 17, 47, 0.66)",
    height: 150,
    width: 150,
    margin: 12,
    alignItems: "center",
    padding: 35,
  },

  Text: {
    color: "white",
    fontSize: 60,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});
