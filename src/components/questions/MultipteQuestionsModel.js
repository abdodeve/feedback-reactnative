import * as React from "react";

import Colors from "../../constants/Colors";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

export default function ValidationModel(props) {
  return (
    <View style={styles.Container}>
      <View>
        <Text style={styles.title}>
          Rate Your Dinig Exprience As Per The Following Aspects
        </Text>
      </View>
      <View style={{ marginBottom: 50 }}>
        <View style={styles.Items}>
          <View
            style={{
              alignItems: "center",
              marginRight: 10,
              color: "white",
              width: 200,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.Titlefood}>Tast & Food Quality </Text>
          </View>
          <TouchableOpacity>
            <Image
              style={styles.ImagContainer}
              source={require("../../../assets/images/Emoji/smily1.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.ImagContainer}
              source={require("../../../assets/images/Emoji/smily2.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.ImagContainer}
              source={require("../../../assets/images/Emoji/angry2.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={styles.ImagContainer}
              source={require("../../../assets/images/Emoji/angry2.png")}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.Items}>
          <View
            style={{
              alignItems: "center",
              marginRight: 10,
              color: "white",
              width: 200,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.Titlefood}>Speed Of Service</Text>
          </View>
          <TouchableOpacity>
            <Image
              style={styles.ImagContainer}
              source={require("../../../assets/images/Emoji/smily1.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.ImagContainer}
              source={require("../../../assets/images/Emoji/smily2.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.ImagContainer}
              source={require("../../../assets/images/Emoji/angry2.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={styles.ImagContainer}
              source={require("../../../assets/images/Emoji/angry2.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.Items}>
          <View
            style={{
              alignItems: "center",
              marginRight: 10,
              flexDirection: "row",
              color: "white",
              width: 200,
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.Titlefood}>Staff Behaviour</Text>
          </View>

          <TouchableOpacity>
            <Image
              style={styles.ImagContainer}
              source={require("../../../assets/images/Emoji/smily1.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.ImagContainer}
              source={require("../../../assets/images/Emoji/smily2.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.ImagContainer}
              source={require("../../../assets/images/Emoji/angry2.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={styles.ImagContainer}
              source={require("../../../assets/images/Emoji/angry2.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {},
  title: {
    fontSize: 22,
    alignItems: "center",
    marginBottom: 60,
    color: "white",
  },
  Items: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexDirection: "row",
    //alignItems: "center",
    padding: 4,
  },
  Titlefood: {
    color: "white",
    fontSize: 17,
  },
  ImagContainer: {
    width: 40,
    height: 40,
    marginRight: 30,
  },
});
