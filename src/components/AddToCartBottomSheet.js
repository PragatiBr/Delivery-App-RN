import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

export default class AddToCart extends Component {
  render() {
    return(
      <View style={styles.containerStyle}>
        <Text style={styles.textStyle}>1 Item | {'\u20B940'}</Text>
        <TouchableOpacity onPress={() => this.props.onPress.navigate('Cart')}>
          <Text style={styles.textStyle}>View Cart <Icon name="cart-outline" size={20} color='white' /></Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle:{
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
  },
  textStyle:{
    fontSize: 20,
    color: 'white',
    fontWeight:'600',
  }
});