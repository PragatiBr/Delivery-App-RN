import React, { Component } from "react";
import SplashScreen from "react-native-splash-screen";
import LoginForm from "./screens/LoginForm";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Registration from "./screens/RegistrationScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./screens/HomeScreen";
import ForgotPassword from "./screens/ForgotPassword";
// import Ionicons from 'react-native-vector-icons';
// import CartScreen from "./screens/CartScreen";
// import AccountScreen from "./screens/AccountScreen";
import RestaurantDetailsScreen from "./screens/RestaurantDetailsScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginForm}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={Registration}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="Details"
            component={RestaurantDetailsScreen}
            //options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;