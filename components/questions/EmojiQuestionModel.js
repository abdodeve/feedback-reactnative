import * as React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { addQuestions } from "../../actions";

const EmojiQuestionModel = ({ questions, addQuestion }) => {
  // setTimeout(() => {
  //   props.changeQuestionState(() => {
  //     return props.currentQuestionState + 1;
  //   });
  // }, 3000);

  const [responseState, setResponseState] = React.useState({
    questionId: "1",
    questionType: "emoji",
    selectedResponse: null,
  });

  function validateAndGoNext() {
    if (props.currentQuestionState === props.nbQuestions - 1) return;
    props.changeQuestionState(() => {
      return props.currentQuestionState + 1;
    });
  }

  return (
    <View style={styles.Screen}>
      <View style={styles.ContainerTitle1}>
        <Text style={styles.title1}>WELCOME</Text>
      </View>
      <View style={styles.ContainerTitle2}>
        <Text style={styles.title2}>Please Rate Our Service</Text>
      </View>

      <View style={styles.Items}>
        <TouchableOpacity
          onPress={() => {
            const resp = { ...responseState, selectedResponse: 1 };
            addQuestion(resp);
            // setResponseState(() => {
            //   return resp;
            // });
            // console.log(responseState, resp);

            // validateAndGoNext();
            // console.log("props.nbQuestions===>", props.nbQuestions);
          }}
        >
          <Image
            style={styles.ImagContainer}
            source={require("../../assets/images/Emoji/star2.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            const resp = { ...responseState, selectedResponse: 2 };
            addQuestion(resp);
            console.log("questions===>", questions);
          }}
        >
          <Image
            style={styles.ImagContainer}
            source={require("../../assets/images/Emoji/star2.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            const resp = { ...responseState, selectedResponse: 3 };
            addQuestion(resp);
          }}
        >
          <Image
            style={styles.ImagContainer}
            source={require("../../assets/images/Emoji/star3.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            const resp = { ...responseState, selectedResponse: 4 };
            addQuestion(resp);
          }}
        >
          <Image
            style={styles.ImagContainer}
            source={require("../../assets/images/Emoji/star4.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            const resp = { ...responseState, selectedResponse: 5 };
            addQuestion(resp);
          }}
        >
          <Image
            style={styles.ImagContainer}
            source={require("../../assets/images/Emoji/star5.png")}
          />
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

export default connect(mapStateToProps, mapDispatchToProps)(EmojiQuestionModel);

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
