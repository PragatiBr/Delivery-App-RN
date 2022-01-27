import React, { Component } from "react";
import { View, Text, StyleSheet, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import CategoryHeader from "../components/CategoryHeader";
import DashedLine from 'react-native-dashed-line';
import Icon from 'react-native-vector-icons/AntDesign';

export default class CategoryItems extends Component {
  state = {
    data: [
      {
        id: 1,
        name: 'True Japanese Noodle Cafe',
        description: 'Japanese-styled noodles',
        rating: '3.8',
        time: '26 mins',
        amount: '\u20B9200 for two',
        address: 'Scheme No 94',
        image: require('../assets/images/japnees-noodle.jpg'),
      },
      {
        id: 2,
        name: 'The Udon Boss Noodle Cafe',
        description: 'Udon noodles',
        rating: '4.0',
        time: '20 mins',
        amount: '\u20B9200 for two',
        address: 'Scheme No 54',
        image: require('../assets/images/udon-boss.jpeg')
      },
      {
        id: 3,
        name: 'The Noodle & Broth Bar',
        description: 'North Indian, Chinese',
        rating: '3.5',
        time: '30 mins',
        amount: '\u20B9200 for two',
        address: 'Scheme No 94',
        image: require('../assets/images/noodle-and-broth.jpg')
      },
      {
        id: 4,
        name: 'Pho the Love of Noodles',
        description: 'Japanese-styled noodles',
        rating: '4.5',
        time: '26 mins',
        amount: '\u20B9200 for two',
        address: 'Scheme No 94',
        image: require('../assets/images/Pho_lon.jpg')
      },
      {
        id: 5,
        name: 'My Noodle Cafe',
        description: 'Noodles Cafe',
        rating: '4.0',
        time: '26 mins',
        amount: '\u20B9200 for two',
        address: 'Scheme No 78',
        image: require('../assets/images/noodle-cafe.jpg'),
      },
      {
        id: 6,
        name: 'Soba & Sake Bar',
        description: 'Japanese-styled noodles.',
        rating: '3.8',
        time: '26 mins',
        amount: '\u20B9200 for two',
        address: 'Scheme No 94',
        image: require('../assets/images/soda-sake-bar.jpg')
      },
    ]
  };

  renderComponent = (itemData) => {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}>
        <View style={{ flexDirection: 'row', marginHorizontal: 15, marginVertical: 10 }}>
          <Image source={itemData.item.image} style={styles.imageStyle} />
          <View style={{ flexDirection: 'column', marginLeft: 10 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}>{itemData.item.name}</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.itemTextStyle}><Icon name="star" style={{ color: 'orange' }} /> {itemData.item.rating}</Text>
              <Text style={styles.itemTextStyle}> {itemData.item.time}</Text>
              <Text style={styles.itemTextStyle}> {itemData.item.amount}</Text>
            </View>
            <Text style={{ paddingTop: 3, fontSize: 15 }}>{itemData.item.description}</Text>
            <Text style={{ paddingTop: 3, fontSize: 15 }}>{itemData.item.address}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    const { textStyle, subTextStyle, dashedlineStyle } = styles;
    return (
      <ScrollView>
        <CategoryHeader onPress={this.props.navigation} />
        <Text style={textStyle}>NOODLES</Text>
        <Text style={subTextStyle}>Taste these delectable classics, delectable noodles to make your day.</Text>
        <DashedLine dashLength={2} dashColor="silver" style={dashedlineStyle} />
        <FlatList
          data={this.state.data}
          keyExtractor={item => item.id}
          renderItem={item => this.renderComponent(item)}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginBottom: 10,
    color: 'black',
  },
  subTextStyle: {
    marginHorizontal: 20,
  },
  dashedlineStyle: {
    marginVertical: 20,
    marginHorizontal: 20,
  },
  imageStyle: {
    height: 110,
    width: 100,
    justifyContent: 'space-around'
  },
  itemTextStyle: {
    paddingRight: 10,
    fontWeight: '800',
    paddingVertical: 5,
    fontSize: 15,
  }
});
