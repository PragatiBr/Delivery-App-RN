import React, { Component } from "react";
import { View, FlatList, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';

class CategoryItem extends Component {
  state = {
    data: [
      {
        id: 1,
        name: "Burger",
        image: require('../assets/images/burger.jpg')
      },
      {
        id: 2,
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
      <View style={styles.itemViewStyle}>
        <TouchableOpacity>
          <Image source={itemData.item.image} style={styles.imageStyle} />
          <Text style={styles.itemTextStyle}>{itemData.item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  }
  render () {
    const { containerStyle, textStyle } = styles;
    return (
      <View style={containerStyle}>
          <Text style={textStyle}>Categories</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={this.state.data}
            keyExtractor={item => item.id}
            renderItem={item => this.renderItemComponent(item)}
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  textStyle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'slateblue',
  },
  imageStyle: {
    width: 70,
    height: 70,
    borderRadius: 80 / 2,
  },
  itemViewStyle: {
    marginTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 10,
    marginBottom: 20,
  },
  itemTextStyle: {
    textAlign: 'center',
    color: 'black',
    marginTop: 5,
  },
});

export default CategoryItem;