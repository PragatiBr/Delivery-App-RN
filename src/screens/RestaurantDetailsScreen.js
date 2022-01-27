import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Image, TextInput, FlatList, LogBox } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import ClockIcon from 'react-native-vector-icons/Feather';
import { Button } from '../components/common';
import RestaurantMenu from "../components/RestaurantMenu";

export default class RestaurantDetailsScreen extends Component {
  componentDidMount() {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }
  state = {
    data: [
      {
        id: 1,
        name: "Pasta",
        amount: '\u20B940',
        image: require('../assets/images/pasta.jpg')
      },
      {
        id: 2,
        name: "Pizza",
        amount: '\u20B920',
        image: require("../assets/images/pizza.jpg")
      },
      {
        id: 3,
        name: "Sandwich",
        amount: '\u20B940',
        image: require("../assets/images/sandwich.jpg")
      },
    ]
  };
  renderItems = (itemData) => {
    return (
      <View style={styles.recommendedStyle}>
        <Image
          source={itemData.item.image}
          style={styles.imageStyle}
          resizeMode="cover"
        />
        <Text
          style={{
            fontSize: 18,
            marginLeft: 10,
            color: 'black',
            fontWeight: '600',
          }}
        >
          {itemData.item.name}
        </Text>
        <Text style={{ marginLeft: 10, color: 'black', fontSize: 15 }}>{itemData.item.amount}</Text>
        <View style={{ marginVertical: 20, flexDirection: "row", height: 40 }}>
          <Button><Icon name="minus" size={20} /></Button>
          <Button><Icon name="plus" size={20} /></Button>
        </View>
      </View>
    );
  }
  render() {
    const {
      restaurantContainer,
      itemContainer,
      itemTextStyle,
      searchContainer,
      textStyle,
      inputStyle,
      iconStyle,
    } = styles;
    return (
      <ScrollView>
        {/* Header Section */}
        <View style={restaurantContainer}>
          <Image source={require('../assets/images/joesbrunch.png')} style={{ height: 70, width: 100, paddingBottom: 10 }} />
          <View style={itemContainer}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'slateblue', paddingBottom: 5, }}>Joe's Brunch</Text>
            <View style={{ flexDirection: 'row', paddingBottom: 10 }}>
              <Text style={itemTextStyle}><Icon name="star" style={{ color: 'orange' }} /> 4.3</Text>
              <Text style={itemTextStyle}><ClockIcon name="clock" /> 20 MINS</Text>
              <Text style={itemTextStyle}><Icon name="credit-card" /> $30 FOR TWO</Text>
            </View>
          </View>
        </View>
        {/* Searched Section */}
        <View style={searchContainer}>
          <TextInput
            placeholder="Search For Item..."
            style={inputStyle}
          />
          <Icon name="search" size={25} style={iconStyle} />
        </View>
        {/* Recommended Section */}
        <Text style={textStyle}>RECOMMENDED</Text>
        <FlatList
          data={this.state.data}
          keyExtractor={item => item.id}
          renderItem={item => this.renderItems(item)}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        {/* Menu Section */}
        <RestaurantMenu />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  restaurantContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    height: 80,
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  itemContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  itemTextStyle: {
    paddingRight: 10,
    paddingVertical: 5,
    fontSize: 15,
  },
  searchContainer: {
    borderWidth: 0.5,
    borderColor: 'silver',
    flexDirection: 'row',
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginTop: 20,
  },
  textStyle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'slateblue',
    marginVertical: 20,
    marginLeft: 20,
  },
  inputStyle: {
    width: 250,
    height: 40,
    paddingLeft: 10,
    marginVertical: 5,
    marginLeft: 10,
    borderColor: 'slateblue',
    alignSelf: 'center',
  },
  iconStyle: {
    alignSelf: 'center',
    color: 'slateblue',
    paddingLeft: 30,
  },
  recommendedStyle: {
    backgroundColor: 'white',
    width: 200,
    height: 240,
    marginLeft: 20,
  },
  imageStyle: {
    height: 100,
    width: 180,
    margin: 7,
    alignSelf: 'center',
  },
});


//(Rupees symbol =\u20B9)