import { Ionicons } from "@expo/vector-icons";
import * as React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  CheckBox,
  TextSubmait,
} from "react-native";

import Colors from "../../constants/Colors";
import { TextInput } from "react-native-gesture-handler";

export default function UserInfoQuestionModel(props) {
  const [question1, setQuestion1] = React.useState([false, false, false]);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* Line : Screen Emoji */}
        <View style={styles.screen1}>
          <View style={styles.EmojiItems}>
            <View style={{ padding: 7 }}>
              <Text style={styles.TextQuestion}>OVERALL EXPERIENCE</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                onPress={() => {
                  setQuestion1([true, false, false]);
                  console.log("tssstds");
                }}
              >
                <Image
                  style={styles.ImagContainer}
                  source={require("../../assets/images/Emoji/smily1.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setQuestion1([false, true, false]);
                  console.log("tssstds");
                }}
              >
                <Image
                  style={styles.ImagContainer}
                  source={require("../../assets/images/Emoji/smily2.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setQuestion1([false, false, true]);
                  console.log("tssstds");
                }}
              >
                <Image
                  style={styles.ImagContainer}
                  source={require("../../assets/images/Emoji/angry1.png")}
                />
              </TouchableOpacity>
            </View>
            {/*Ligne Emoji 2 */}
            <View style={{ padding: 7 }}>
              <Text style={styles.TextQuestion}>SERVICE</Text>
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
                  source={require("../../assets/images/Emoji/angry1.png")}
                />
              </TouchableOpacity>
            </View>
            {/* Lign Emoji 3 */}
            <View style={{ padding: 7 }}>
              <Text style={styles.TextQuestion}>AMBIENCE</Text>
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
                  source={require("../../assets/images/Emoji/angry1.png")}
                />
              </TouchableOpacity>
            </View>
            <View style={{ padding: 7 }}>
              <Text style={styles.TextQuestion}>
                Was This Meal Value For Money
              </Text>
            </View>
            <View style={styles.CheckboxContainer}>
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
          <View style={styles.UsertInfo} />
          <View style={{ padding: 7 }}>
            <Text style={styles.TextAreainfo}>Add Comments (Optional)</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TextInput
              style={styles.TextAreaImput}
              //  multiline
              numberOfLines={16}
              editable
              maxLength={40}
              placeholder="hadou chrlck "
            />
          </View>
          <View
            style={{
              paddingTop: 10,
            }}
          >
            <TextInput
              placeholder="Enter your name"
              style={styles.TextInputNameEmailPhon}
            />
          </View>

          <View style={{ paddingTop: 10 }}>
            <TextInput
              textContentType="emailAddress"
              placeholder="Exemple@User.com"
              style={styles.TextInputNameEmailPhon}
            />
          </View>
          <View style={{ paddingTop: 8 }}>
            <TextInput
              textContentType="telephoneNumber"
              placeholder="+00 05 25 65 45"
              style={styles.TextInputNameEmailPhon}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
              right: 9,
            }}
          >
            <CheckBox value={false} />
            <Text
              style={{
                marginLeft: 5,
                color: "white",
                fontWeight: "bold",
              }}
            >
              Sign me Up For Support
            </Text>
          </View>
          <View
            style={{ flexDirection: "row", alignItems: "center", right: 9 }}
          >
            <CheckBox value={false} />
            <Text style={{ marginLeft: 5, color: "white", fontWeight: "bold" }}>
              We are In Your Chose
            </Text>
          </View>
        </View>
      </View>
      {/* Line Button Submit */}
      <View style={styles.containerBtn}>
        <TouchableOpacity
          onPress={() => {
            console.log("question1===>", question1);
            /* const data = { overallExperience: question1, service: question2 };*/
          }}
          style={styles.buttonSubmit}
        >
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
  TextQuestion: { fontSize: 14, color: "white", fontWeight: "bold" },
  ImagContainer: {
    width: 40,
    height: 40,
    marginRight: 30,
  },
  CheckboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 9,
  },
  UsertInfo: {
    // width: 300,
    //height: 290,
    // marginHorizontal: 50,

    backgroundColor: "rgba(25, 181, 30, 0.7)",
    //paddingHorizontal: 20,
  },
  TextAreainfo: {
    fontSize: 13,
    color: "white",
    fontWeight: "bold",
    marginRight: 10,
  },
  TextAreaImput: {
    height: 70,
    width: 170,
    right: 10,
    // borderColor: "black",
    borderBottomWidth: 2,
    borderBottomColor: "green",

    backgroundColor: "white",
    color: "black",
    textAlignVertical: "top",
    borderRadius: 5,
  },
  TextInputNameEmailPhon: {
    backgroundColor: "white",
    color: "black",
    width: 170,
    textAlign: "center",
    borderRadius: 5,
    borderBottomWidth: 2,
    borderBottomColor: "green",
    right: 10,
  },
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
