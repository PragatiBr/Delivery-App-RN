import React, { Component } from "react";
import { View, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/Feather";

class HomeHeader extends Component {
  render() {
    const { headerContainer, textInputStyle, iconStyle, searchContainer } = styles;
    return (
      <View>
        <View style={headerContainer}>
          <Image
            source={{ uri: 'https://media-exp1.licdn.com/dms/image/C510BAQFFEDwhEhH1nw/company-logo_200_200/0/1542181185790?e=2159024400&v=beta&t=-fCrx1xapE6g1VkcFEFGLHFUrkY_cHvKDiumjeOzKKE' }}
            style={{ height: 50, width: 100 }}
          />
          <Icon name="shopping-cart" size={30} style={iconStyle} />
        </View>
        <View style={searchContainer}>
        <TouchableOpacity>
          <Icon name="search" size={30} style={iconStyle} />
          </TouchableOpacity>
          <TextInput
            placeholder="Restaurant name, causine, or a Dish.."
            style={textInputStyle}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  headerContainer: {
    height: 70,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInputStyle: {
    width: 250,
    height: 40,
    paddingLeft: 10,
    marginVertical: 6,
    marginLeft: 10,
    borderColor: 'slateblue',
  },
  iconStyle: {
    alignSelf: 'center',
    marginVertical: 10,
    color: 'slateblue',
  },
  searchContainer: {
    flexDirection: 'row',
    paddingLeft: 20,
    alignItems: 'flex-start',
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 12,
  },
});

export default HomeHeader;