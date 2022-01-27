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
import CartScreen from "./screens/CartScreen";
// import AccountScreen from "./screens/AccountScreen";
import RestaurantDetailsScreen from "./screens/RestaurantDetailsScreen";
import CategoryItems from "./screens/CategoryItems";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen
            name="Login"
            component={LoginForm}
          />
          <Stack.Screen
            name="Register"
            component={Registration}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
          />
          <Stack.Screen 
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen 
            name="Details"
            component={RestaurantDetailsScreen}
            options={{ headerShown: true }}
          />
          <Stack.Screen 
            name="Category"
            component={CategoryItems}
          />
          <Stack.Screen 
            name="Cart"
            component={CartScreen}
            options={{ headerShown: true }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;