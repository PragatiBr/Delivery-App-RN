import React from "react";
import { TextInput, Text, View, StyleSheet } from "react-native";

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  return(
    <View style={styles.containerStyle}>
      <Text style={styles.labelStyle}>{label}</Text>
      <TextInput
        autoCorrect={false}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={styles.inputStyle} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex:1,
  },
  inputStyle: {
    color: '#000',
    backgroundColor: 'powderblue',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex:1,
  },
  containerStyle:{
    height:50,
    flex:1,
    //flexDirection: 'row',
    alignItems:'flex-start',
  },
});

export { Input };