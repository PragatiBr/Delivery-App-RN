import React from "react";
import { View, ImageBackground, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const CategoryHeader = ({ onPress }) => {
  const bgImage = "https://www.smunch.com/hs-fs/hubfs/Restaurant%20pages%20pictures/MAIN%20ASSETS/restaurant%20pages%20header.png?width=1920&name=restaurant%20pages%20header.png";
  
  return(
    <View style={{ flexDirection: 'row',  }}>
      <ImageBackground source={{ uri: bgImage }} resizeMode="cover" style={styles.backgroundImage} />
      <TouchableOpacity onPress={() => onPress.navigate('Home')}>
        <Icon name="arrow-left" size={30} style={styles.iconStyle} />
      </TouchableOpacity>
      <Image source={require('../assets/images/noodles.jpg')} style={styles.imageStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    height: 100, 
    width: 370, 
    flex:1,
  },
  iconStyle:{
    alignItems:'flex-start', 
    marginRight: 200, 
    marginVertical: 15,
    color:'white',
  },
  imageStyle: {
    height: 80, 
    width: 80, 
    alignItems: 'center', 
    marginRight: 20, 
    borderRadius: 40, 
    marginTop: 10,
  },
});

export default CategoryHeader;