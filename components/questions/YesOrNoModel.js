import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import { connect } from "react-redux";
import { addQuestions } from "../../actions";

const YesOrNoModel = ({ questions, addQuestion }) => {
  const [responseState, setResponseState] = React.useState({
    questionId: "2",
    questionType: "yesOrNo",
    selectedResponse: null,
  });

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
        <TouchableOpacity
          style={styles.Container}
          onPress={() => {
            const resp = { ...responseState, selectedResponse: 1 };
            addQuestion(resp);
          }}
        >
          <Text style={styles.Text}>Yes</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.Container2}
          onPress={() => {
            const resp = { ...responseState, selectedResponse: 2 };
            addQuestion(resp);
          }}
        >
          <Text style={styles.Text}>No</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  questions: state,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addQuestion: (response) => {
      dispatch(addQuestions(response));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(YesOrNoModel);

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
