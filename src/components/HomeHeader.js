import React, { Component } from "react";
import { View, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/Feather";

class HomeHeader extends Component {
  render() {
    const { headerContainer, textInputStyle, iconStyle } = styles;
    return (
      <View style={headerContainer}>
        <Image
          source={{ uri: 'https://media-exp1.licdn.com/dms/image/C510BAQFFEDwhEhH1nw/company-logo_200_200/0/1542181185790?e=2159024400&v=beta&t=-fCrx1xapE6g1VkcFEFGLHFUrkY_cHvKDiumjeOzKKE' }}
          style={{ height: 50, width: 100 }}
        />
        <TextInput
          placeholder="Search"
          style={textInputStyle}
        />
        <TouchableOpacity>
          <Icon name="search" size={30} style={iconStyle} />
        </TouchableOpacity>
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
    height: 75,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInputStyle: {
    width: 180,
    height: 35,
    borderBottomWidth: 1,
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
});

export default HomeHeader;