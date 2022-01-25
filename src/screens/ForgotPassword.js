import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Button, Spinner, Header } from '../components/common';

class ForgotPassword extends Component {
  state = { email: '', error: '', loading: false };

  renderButton() {
    if(this.state.loading) {
      return <Spinner size="small" />;
    }
    
    return (
      <Button onPress={() => this.props.navigation.navigate('Login')}>
        SUBMIT
      </Button>
    );
  }
  render(){
    return (
      <View style={{ backgroundColor: 'lightgrey ', flex: 1 }}>
        <Header
          iconName="chevron-left" 
          headerText="FORGOT PASSWORD"  
          headerImage="https://media-exp1.licdn.com/dms/image/C510BAQFFEDwhEhH1nw/company-logo_200_200/0/1542181185790?e=2159024400&v=beta&t=-fCrx1xapE6g1VkcFEFGLHFUrkY_cHvKDiumjeOzKKE"
          onPress={this.props.navigation} 
        />
        <View style={styles.containerStyle}>
          <Text style={styles.textStyle}>Email</Text>
          <TextInput 
            style={styles.inputStyle}
            placeholder="user@gmail.com"
            value={this.state.email}
            onChangeText={email => this.setState({ email })} 
          />
          <Text style={styles.textStyle}>The link will be share on your email.</Text>
          <Text>{this.state.error}</Text>
        </View>

        <View style={styles.buttonViewStyle}>
          {this.renderButton()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    justifyContent: 'center',
    elevation: 1,
    marginHorizontal: 25,
    marginTop: 100,
  },
  textStyle: {
    fontSize: 17,
    fontWeight: '600',
    color: 'black'
  },
  inputStyle: {
    height: 50,
    marginTop: 10,
    backgroundColor: 'lightsteelblue',
    lineHeight: 5,
    fontSize: 15,
    paddingLeft:10,
  },
  buttonViewStyle: {
    height:50,
  },
  footerView: {
    alignItems:'center',
  },
  errorTextStyle:{
    fontSize:16,
    color:'red',
  }
});

export default ForgotPassword;