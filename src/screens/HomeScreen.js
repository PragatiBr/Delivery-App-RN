import React, { Component } from "react";
import { ScrollView, LogBox } from 'react-native';
import Categories from "../components/Categories";
import HomeHeader from "../components/HomeHeader";
import RestaurantList from "../components/RestaurantList";
import SliderScreen from "../components/SliderScreen";

class HomeScreen extends Component {
  componentDidMount() {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }
  render() {
    return (
      <ScrollView>
        <HomeHeader />
        <Categories onPress={this.props.navigation} />
        <SliderScreen onPress={this.props.navigation} />
        <RestaurantList onPress={this.props.navigation} />
      </ScrollView>
    );
  }
}

export default HomeScreen;