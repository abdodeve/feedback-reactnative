import React, { useState } from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { SplashScreen } from "expo";

import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import QuestionsScreen from "./screens/QuestionsScreen";

import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";

const store = createStore(rootReducer);

const Stack = createStackNavigator();
export default function App(props) {
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
