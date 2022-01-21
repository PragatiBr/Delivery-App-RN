/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const Header = ({ headerText, headerSubText, headerImage, iconName, navigation }) => {

  const { textStyles, viewStyle, subTextStyle } = styles;

  return (
    <View style={viewStyle}>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Feather name={iconName} size={30} color="black"  />
      </TouchableOpacity>
      <Image source={{ uri:headerImage }} style={styles.imageStyle} />
      <Text style={textStyles}>{headerText}</Text>
      <Text style={subTextStyle}>{headerSubText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyles:{
    fontSize: 20,
    color: 'black',
    paddingTop:30,
    fontWeight:'bold',
  },
  viewStyle:{
    justifyContent:'flex-start',
    backgroundColor: 'white',
    alignItems:'flex-start',
    height:200,
    paddingTop:20,
    paddingLeft: 20,
    shadowColor:'#000',
    shadowOffset:{ width: 0, height: 2 },
    shadowOpacity:0.2,
  },
  imageStyle:{
    height: 50,
    width: 180,
  },
  subTextStyle:{
    fontSize: 15,
    color:'black',
  }
});

export { Header };
