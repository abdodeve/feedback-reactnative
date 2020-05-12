import * as React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

export default function EmojiQuestionModel(props) {
  return (
    <View style={styles.Container}>
      <View>
        <Text style={styles.title}>
          Rate Your Dinig Exprience As Per The Following Aspects
        </Text>
      </View>

      <View style={styles.Items}>
        <View style={styles.TitleQuesion}>
          <Text style={styles.Titlefood}>Tast & Food Quality </Text>
        </View>
        <TouchableOpacity>
          <Image
            style={styles.ImagContainer}
            source={require("../assets/images/Emoji/smily1.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.ImagContainer}
            source={require("../assets/images/Emoji/smily2.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.ImagContainer}
            source={require("../assets/images/Emoji/angry2.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            style={styles.ImagContainer}
            source={require("../assets/images/Emoji/angry1.png")}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.Items}>
        <View style={styles.TitleQuesion}>
          <Text style={styles.Titlefood}>Speed Of Service</Text>
        </View>
        <TouchableOpacity>
          <Image
            style={styles.ImagContainer}
            source={require("../assets/images/Emoji/smily1.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.ImagContainer}
            source={require("../assets/images/Emoji/smily2.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.ImagContainer}
            source={require("../assets/images/Emoji/angry2.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            style={styles.ImagContainer}
            source={require("../assets/images/Emoji/angry1.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.Items}>
        <View style={styles.TitleQuesion}>
          <Text style={styles.Titlefood}>Staff Behaviour</Text>
        </View>

        <TouchableOpacity>
          <Image
            style={styles.ImagContainer}
            source={require("../assets/images/Emoji/smily1.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.ImagContainer}
            source={require("../assets/images/Emoji/smily2.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.ImagContainer}
            source={require("../assets/images/Emoji/angry2.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            style={styles.ImagContainer}
            source={require("../assets/images/Emoji/angry1.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: { marginBottom: 50 },
  title: {
    fontSize: 24,
    alignItems: "center",
    marginBottom: 60,
    color: "white",
    fontWeight: "bold",
  },
  Items: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexDirection: "row",
    //alignItems: "center",
    padding: 4,
  },
  TitleQuesion: {
    alignItems: "center",
    marginRight: 10,
    color: "white",
    width: 200,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  Titlefood: {
    color: "white",
    fontSize: 19,
    fontWeight: "bold",
  },

  ImagContainer: {
    width: 50,
    height: 50,
    //Color: "white",
    marginRight: 30,
  },
});
