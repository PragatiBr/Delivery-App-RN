import React, { Component } from "react";
import { View, ScrollView } from 'react-native';
import CategoryItem from "../components/CategoryItem";
import HomeHeader from "../components/HomeHeader";
import SliderScreen from "../components/SliderScreen";

class HomeScreen extends Component {
  
  render() {
    return (
      <View>
        <HomeHeader />
        <CategoryItem />
        <SliderScreen />
      </View>
    );
  }
}

export default HomeScreen;