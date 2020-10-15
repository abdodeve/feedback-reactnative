import React, { useState } from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { SplashScreen } from "expo";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import QuestionsScreen from "./src/screens/QuestionsScreen";
import rootReducer from "./src/reducers";
import { connect } from "./src/utils/auth";

// const store = createStore(rootReducer);
const store = createStore(rootReducer, applyMiddleware(thunk));

const Stack = createStackNavigator();
export default function App(props) {
  connect();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="questions" headerMode="none">
          <Stack.Screen name="questions" component={QuestionsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
  },
});
