/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet} from 'react-native';

const Card = props => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    //borderWidth: 1,
    borderRadius: 2,
    borderColor: 'grey',
    //borderBottomWidth: 0,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0},
    shadowOpacity: 0.1,
    shadowRadius:2,
    elevation:1,
    marginHorizontal: 20,
    marginTop:10,
  },
});

export { Card };
