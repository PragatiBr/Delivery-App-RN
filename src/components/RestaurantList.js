import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import ClockIcon from 'react-native-vector-icons/Feather';

class RestaurantList extends Component {
  state = {
    data: [
      {
        id: 1,
        resName: 'Joe\'s Brunch',
        resImg: require('../assets/images/joesbrunch.png'),
        rating: '4.3',
        amount: '\u20B930 For Two',
        time: '20 mins'
      },
      {
        id: 2,
        resName: 'The London Tavern',
        resImg: require('../assets/images/The-London.png'),
        rating: '4.3',
        amount: '\u20B930 For Two',
        time: '20 mins'
      },
      {
        id: 3,
        resName: 'Beyond India',
        resImg: require('../assets/images/beyond-india.png'),
        rating: '4.5',
        amount: '\u20B930 For Two',
        time: '20 mins'
      },
      {
        id: 4,
        resName: 'Feather Hotel',
        resImg: require('../assets/images/feather-hotel.png'),
        rating: '4.1',
        amount: '\u20B930 For Two',
        time: '20 mins'
      },
      {
        id: 5,
        resName: 'Rezz Hotel',
        resImg: require('../assets/images/rezz-hotel.png'),
        rating: '4.0',
        amount: '\u20B930 For Two',
        time: '20 mins'
      },
    ]
  };
  renderComponent = (itemData) => {
    return (
      <TouchableOpacity onPress={() => this.props.onPress.navigate('Details')}>
        <View style={styles.restaurantContainer}>
          <Image source={itemData.item.resImg} style={{ width: 100, height: 70, marginVertical: 5, marginLeft: 5 }} />
          <View style={styles.itemContainer}>
            <Text style={{ fontSize: 18, color: 'black', paddingBottom: 5 }}>{itemData.item.resName}</Text>
            <View style={{ flexDirection: 'row', borderTopWidth: 1, borderColor: 'silver', }}>
              <Text style={styles.itemTextStyle}><Icon name="star" style={{ color: 'orange' }} />{itemData.item.rating}</Text>
              <Text style={styles.itemTextStyle}><ClockIcon name="clock" />{itemData.item.time}</Text>
              <Text style={styles.itemTextStyle}><Icon name="credit-card" /> {itemData.item.amount}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    const { containerStyle, textStyle } = styles;
    return (
      <View style={containerStyle}>
        <Text style={textStyle}>Restaurants Near You</Text>
        <FlatList
          data={this.state.data}
          keyExtractor={item => item.id}
          renderItem={item => this.renderComponent(item)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  textStyle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'slateblue',
    marginVertical: 10,
  },
  restaurantContainer: {
    flexDirection: 'row',
    borderRadius: 10,
    marginVertical: 10,
    height: 80,
    backgroundColor: 'white',
  },
  itemTextStyle: {
    paddingRight: 10,
    paddingVertical: 10,
    fontSize: 15,
  },
  itemContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginHorizontal: 10,
    marginVertical: 10,
  },
});

export default RestaurantList;