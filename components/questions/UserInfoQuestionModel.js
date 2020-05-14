import { Ionicons } from "@expo/vector-icons";
import * as React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  CheckBox,
} from "react-native";

import Colors from "../../constants/Colors";

export default function UserInfoQuestionModel(props) {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* Line : Screen Emoji */}
        <View style={styles.screen1}>
          <View style={styles.EmojiItems}>
            <View style={{ padding: 7 }}>
              <Text
                style={{ fontSize: 14, color: "white", fontWeight: "bold" }}
              >
                Tel Me the throw
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity>
                <Image
                  style={styles.ImagContainer}
                  source={require("../../assets/images/Emoji/smily1.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={styles.ImagContainer}
                  source={require("../../assets/images/Emoji/smily2.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={styles.ImagContainer}
                  source={require("../../assets/images/Emoji/smily1.png")}
                />
              </TouchableOpacity>
            </View>
            {/*Ligne Emoji 2 */}
            <View style={{ padding: 7 }}>
              <Text
                style={{ fontSize: 14, color: "white", fontWeight: "bold" }}
              >
                Tel Me the throw dind me
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity>
                <Image
                  style={styles.ImagContainer}
                  source={require("../../assets/images/Emoji/smily1.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={styles.ImagContainer}
                  source={require("../../assets/images/Emoji/smily2.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={styles.ImagContainer}
                  source={require("../../assets/images/Emoji/smily1.png")}
                />
              </TouchableOpacity>
            </View>
            {/* Lign Emoji 3 */}
            <View style={{ padding: 7 }}>
              <Text
                style={{ fontSize: 14, color: "white", fontWeight: "bold" }}
              >
                Tel Me the throw in r
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity>
                <Image
                  style={styles.ImagContainer}
                  source={require("../../assets/images/Emoji/smily1.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={styles.ImagContainer}
                  source={require("../../assets/images/Emoji/smily2.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={styles.ImagContainer}
                  source={require("../../assets/images/Emoji/smily1.png")}
                />
              </TouchableOpacity>
            </View>
            <View style={{ padding: 7 }}>
              <Text
                style={{ fontSize: 14, color: "white", fontWeight: "bold" }}
              >
                Tel Me the throw dind me after thids meil
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 9,
              }}
            >
              <CheckBox value={false} />
              <Text style={{ marginLeft: 5, color: "white" }}>YES</Text>

              <CheckBox value={true} style={{ marginLeft: 20 }} />
              <Text style={{ marginLeft: 5, color: "white" }}>No</Text>
            </View>
            {/*Ligne Emoji 2 */}
          </View>
        </View>
        {/* Line : Input & Text area */}

        <View style={styles.screen2}>
          <View style={styles.InputInfo} />
        </View>
      </View>
      {/* Line Button Submit */}
      <View style={styles.containerBtn}>
        <TouchableOpacity style={styles.buttonSubmit}>
          <Text style={styles.TextSubmait}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 90,
  },
  screen1: {
    flexDirection: "column",
    //marginLeft: 10,
    // marginBottom: 10,
  },
  screen2: {
    flexDirection: "column",
    //marginBottom: 90,
    // marginLeft: 20,
  },
  EmojiItems: {
    width: 350,
    height: 290,
    marginLeft: 10,
    // backgroundColor: "rgba(25, 181, 30, 0.7)",
  },
  ImagContainer: {
    width: 40,
    height: 40,
    marginRight: 30,
  },
  InputInfo: { width: 300, height: 290, backgroundColor: "powderblue" },
  containerBtn: {
    marginBottom: 73,
  },
  buttonSubmit: {
    width: "100%",
    alignItems: "center",

    height: 50,

    backgroundColor: "rgba(25, 131, 17, 0.7)",
  },
  TextSubmait: { fontSize: 22, padding: 10, color: "white" },
});
