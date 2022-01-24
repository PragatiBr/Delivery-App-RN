import React, { Component } from "react";
import { View, Text, StyleSheet, SectionList, Image, TouchableOpacity, LogBox } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const pizzaSection = [
  {
    title: 'Pizza',
    data: [
      {
        name: 'Cheese Pizza',
        id: 1,
        image: require('../assets/images/cheese-pizza.jpg'),
        description: 'Epic combination of signature pan crust, delicious paneer & veg momos topped with',
        amount: '$ 100',
      },
      {
        name: 'Peppy Paneer Pizza',
        id: 2,
        image: require('../assets/images/peppy-paneer-pizza.jpg'),
        description: 'Epic combination of signature pan crust, delicious paneer & veg momos topped with',
        amount: '$ 120',
      },
      {
        name: 'Margherit Pizza',
        id: 3,
        image: require('../assets/images/Margarita.png'),
        description: 'Epic combination of signature pan crust, delicious paneer & veg momos topped with',
        amount: '$ 150',
      },
      {
        name: 'Pepperoni Pizza',
        id: 4,
        image: require('../assets/images/pepperoni-pizza.jpg'),
        description: 'Epic combination of signature pan crust, delicious paneer & veg momos topped with',
        amount: '$ 180',
      },
      {
        name: 'Veggie Pizza',
        id: 5,
        image: require('../assets/images/veggie-pizza.jpg'),
        description: 'Epic combination of signature pan crust, delicious paneer & veg momos topped with',
        amount: '$ 120',
      },
    ],
  }
];

const pastaSection = [
  {
    title: 'Pasta',
    data: [
      {
        name: 'Red Sause Pasta',
        id: 6,
        image: require('../assets/images/red-sause-pasta.jpg'),
        description: 'Epic combination of signature pan crust, delicious paneer & veg momos topped with',
        amount: '$ 120',
      },
      {
        name: 'White Sause Pasta',
        id: 7,
        image: require('../assets/images/white-sause-pasta.jpg'),
        description: 'Epic combination of signature pan crust, delicious paneer & veg momos topped with',
        amount: '$ 120',
      },
    ],
  },
];

const snacksSection = [
  {
    title: 'Snacks',
    data: [
      {
        name: 'Stuffed Garlic Bread',
        id: 8,
        image: require('../assets/images/stuffed-garlic-bread.jpg'),
        description: 'Epic combination of signature pan crust, delicious paneer & veg momos topped with',
        amount: '$ 120',
      },
      {
        name: 'French Fries',
        id: 9,
        image: require('../assets/images/french-fries.jpg'),
        description: 'Epic combination of signature pan crust, delicious paneer & veg momos topped with',
        amount: '$ 120',
      },
    ],
  },
];

const dessertsSection = [
  {
    title: 'Desserts',
    data: [
      {
        name: 'Gulab Jamun',
        id: 10,
        image: require('../assets/images/gulab-jamun.jpg'),
        description: 'Epic combination of signature pan crust, delicious paneer & veg momos topped with',
        amount: '$ 60',
      },
      {
        name: 'Rasmalai',
        id: 11,
        image: require('../assets/images/rasmalai.jpg'),
        description: 'Epic combination of signature pan crust, delicious paneer & veg momos topped with',
        amount: '$ 99',
      },
      {
        name: 'Ice - Cream',
        id: 12,
        image: require('../assets/images/ice-cream.jpg'),
        description: 'Epic combination of signature pan crust, delicious paneer & veg momos topped with',
        amount: '$ 100',
      },
    ],
  }
];

export default class RestaurantMenu extends Component {

  componentDidMount() {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }
  
  renderItems = (itemData) => {
    return (
      <View style={{flexDirection:'row', justifyContent: 'space-evenly', borderBottomWidth: 1, borderColor: 'silver', marginVertical: 5, paddingBottom: 10 }}>
        <Image source={itemData.item.image} style={{ height: 80, width: 100, borderRadius: 10 }} />
          <View style={{ flexDirection:'column', width: 120 }}>
            <Text style={styles.itemTextStyle}>{itemData.item.name}</Text>
            <Text numberOfLines={2} ellipsizeMode="tail">{itemData.item.description}</Text>
            <Text>{itemData.item.amount}</Text>
          </View>
        <Button />
      </View>
    );
  }

  render() {
    const { containerStyle, textStyle, sectionTitleStyle } = styles;
    return (
      <View style={containerStyle}>
        <Text style={textStyle}>MENU</Text>
          <SectionList
            sections={[...pizzaSection, ...pastaSection, ...snacksSection, ...dessertsSection]}
            keyExtractor={item => item.id}
            renderItem={item => this.renderItems(item)}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={sectionTitleStyle}>{title}</Text>
            )}
          /> 
      </View>
    );
  }
}

const Button = () => {
  return (
    <View style={styles.buttonStyle}>
      <TouchableOpacity>
        <Icon name="minus" size={20} style={{ color: 'black' }} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="plus" size={20} style={{ color: 'black' }} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle:{
    marginVertical: 20,
    backgroundColor: 'white',
    paddingTop: 10,
  },
  textStyle:{
    fontSize: 25,
    color: 'slateblue',
    fontWeight: 'bold',
    marginLeft: 20,
  },
  itemTextStyle:{
    paddingTop: 10,
    fontSize: 18,
    color:'black',
    fontWeight: '600',
  },
  sectionTitleStyle:{
    marginVertical:10,
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
    paddingVertical: 10,
    paddingLeft: 20,
    backgroundColor: 'silver'
  },
  buttonStyle:{
    borderWidth: 1,  
    flexDirection: 'row', 
    width: 80, 
    height: 30, 
    alignItems:'center', 
    justifyContent:'space-around', 
    marginTop:20, 
    borderColor: 'silver',
  },
});