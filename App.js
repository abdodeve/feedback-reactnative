import React, { useState, useEffect } from "react";
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

import { AppLoading } from "expo";
import { Container, Text } from "native-base";
import * as Font from "expo-font";

import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";

// const store = createStore(rootReducer);
const store = createStore(rootReducer, applyMiddleware(thunk));

const Stack = createStackNavigator();
export default function App(props) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function onLoad() {
      // Load fonts
      await Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
        ...Ionicons.font,
      });
      // connect to firebase
      await connect();
      // Change state to ready
      setIsReady(true);
    }

    onLoad();
  });

  if (!isReady) {
    return <AppLoading />;
  }

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="questions" headerMode="none">
            <Stack.Screen name="questions" component={QuestionsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
  },
});
