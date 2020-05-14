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
    <View>
      <Text
        style={{
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: 25,
          //padding: 50,
          paddingBottom: 50,
          fontWeight: "bold",
        }}
      >
        Great ! Want To Sign Up For Our Exclusive Email Offers ?
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity style={styles.Container}>
          <Text style={styles.Text}>Yes</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Container2}>
          <Text style={styles.Text}>No</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    borderRadius: 35,
    backgroundColor: "rgba(25, 131, 17, 0.7)",
    height: 150,
    width: 180,
    margin: 12,
    alignItems: "center",
    padding: 35,
    borderColor: "red",
  },

  Container2: {
    borderRadius: 35,
    backgroundColor: "rgba(131, 17, 47, 0.66)",
    height: 150,
    width: 180,
    margin: 12,
    alignItems: "center",
    padding: 35,
  },

  Text: {
    color: "white",
    fontSize: 60,

    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});
