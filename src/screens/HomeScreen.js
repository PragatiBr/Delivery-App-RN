import React, { Component } from "react";
import { Text, View, StyleSheet, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native';

class HomeScreen extends Component {
  state = {
    data: [
      {
        id: 1,
        name: "Burger",
        image: require('../assets/images/burger.jpg')
      },
      {
        id:2,
        name: "Pizza",
        image: require("../assets/images/pizza.jpg")
      },
      {
        id: 3,
        name: "Sandwich",
        image: require("../assets/images/sandwich.jpg")
      },
      {
        id: 4,
        name: "Thali",
        image: require('../assets/images/thali.jpg')
      },
      {
        id: 5,
        name: "Pasta",
        image: require('../assets/images/pasta.jpg')
      },
      {
        id: 6,
        name: "Noodles",
        image: require('../assets/images/noodles.jpg')
      }
    ]
  };

  renderItemComponent = (itemData) => {
    return (
    <TouchableOpacity>
      <Image source={itemData.image} />
      <Text>{itemData.name}</Text>
    </TouchableOpacity>
    );
  }

  render() {
    const { containerStyle, textStyle } = styles;

    return (
      <View style={containerStyle}>
        <Text style={textStyle}>Categories</Text>
          <View>
            <FlatList 
              data={this.state.data}
              keyExtractor={item => item.id}
              renderItem={item => this.renderItemComponent(item)}
            />
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    marginHorizontal: 20,
    marginTop:10,
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default HomeScreen;