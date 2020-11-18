import React, { useState, useEffect } from "react";
// import CheckBox from "@react-native-community/checkbox";

import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import {
  Layout,
  Radio,
  RadioGroup,
  Text,
  Input,
  CheckBox,
} from "@ui-kitten/components";
import { connect } from "react-redux";
import actions from "../../../actions";
import * as SecureStore from "expo-secure-store";

const useCheckboxState = (initialCheck = false) => {
  const [checked, setChecked] = React.useState(initialCheck);
  return { checked, onChange: setChecked };
};

const ContactForm = ({ addQuestion, ownProps }) => {
  const [comments, setComments] = React.useState("");
  const [fullname, setFullname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [isNewsletterChecked, setIsNewsletterChecked] = React.useState(false);
  const [contactFormData, setContactFormData] = React.useState({
    comments,
    fullname,
    email,
    phone,
    isNewsletterChecked,
  });

  const syncContactFormData = (newInputData) => {
    let inputData = { ...contactFormData, ...newInputData };
    setContactFormData(inputData);
    return inputData;
  };

  /**
   * On click to Emoji for Select response
   * @param {*} questionId
   * @param {*} positionSelected
   */
  const onSelectResponse = (questionId, inputData) => {
    ownProps.setSelectedResponseState((currentState) => {
      const updatedState = currentState.map((elment) => {
        if (elment.questionId == questionId) {
          elment.data.comments = inputData.comments;
          elment.data.fullname = inputData.fullname;
          elment.data.email = inputData.email;
          elment.data.phone = inputData.phone;
          elment.data.isNewsletterChecked = inputData.isNewsletterChecked;
          return elment;
        }
        return elment;
      });
      return updatedState;
    });
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 17,
          fontWeight: "bold",
          marginBottom: 5,
          color: "#fff",
        }}
      >
        Additional comments (Optional)
      </Text>
      <Input
        style={styles.paddingBottomInputs}
        multiline
        numberOfLines={4}
        placeholder="Comments"
        value={comments}
        onChangeText={(nextValue) => {
          setComments(nextValue);
          const inputData = syncContactFormData({ comments: nextValue });
          onSelectResponse(ownProps.questionId, inputData);
        }}
      />
      <Layout style={styles.layout}>
        <Input
          style={styles.paddingBottomInputs}
          placeholder="Full name"
          value={fullname}
          onChangeText={(nextValue) => {
            setFullname(nextValue);
            syncContactFormData({ fullname: nextValue });
            const inputData = syncContactFormData({ fullname: nextValue });
            onSelectResponse(ownProps.questionId, inputData);
          }}
        />
        <Input
          style={styles.paddingBottomInputs}
          keyboardType="email-address"
          placeholder="E-mail"
          value={email}
          onChangeText={(nextValue) => {
            setEmail(nextValue);
            const inputData = syncContactFormData({ email: nextValue });
            onSelectResponse(ownProps.questionId, inputData);
          }}
        />
        <Input
          style={styles.paddingBottomInputs}
          keyboardType="phone-pad"
          placeholder="Phone"
          value={phone}
          onChangeText={(nextValue) => {
            setPhone(nextValue);
            const inputData = syncContactFormData({ phone: nextValue });
            onSelectResponse(ownProps.questionId, inputData);
          }}
        />
        <CheckBox
          style={{ ...styles.checkbox, ...styles.paddingBottomInputs }}
          status="success"
          checked={isNewsletterChecked}
          onChange={(nextChecked) => {
            setIsNewsletterChecked(nextChecked);
            const inputData = syncContactFormData({
              isNewsletterChecked: nextChecked,
            });
            onSelectResponse(ownProps.questionId, inputData);
          }}
        >
          Sign up me for Newsletters (Promotion, Solde ...)
        </CheckBox>
      </Layout>
    </View>
  );
};

const mapStateToProps = (state, ownProps) => ({
  ownProps: ownProps,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addQuestion: (response) => {
      dispatch(actions.questions.addQuestions(response));
    },
  };
};

const styles = StyleSheet.create({
  container: {
    paddingRight: 10,
  },
  radio: {
    margin: 2,
  },
  layout: {
    padding: 10,
    justifyContent: "center",
    backgroundColor: "rgba(247, 249, 249,0.5)",
    borderRadius: 10,
  },
  paddingBottomInputs: {
    paddingBottom: 5,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
