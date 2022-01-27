import React, { Component } from "react";
import { Text, StyleSheet, View, TextInput } from 'react-native';
import { Button, Spinner, Header } from '../components/common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };

  renderButton() {
    if(this.state.loading) {
      return <Spinner size="small" />;
    }
    
    return (
      <Button onPress={() => this.props.navigation.navigate('Home')}>
        LOGIN
      </Button>
    );
  }

  render() {
    return (
      <View style={{ backgroundColor: 'lightgrey ', flex: 1 }}>
        <Header 
          headerText="LOGIN" 
          headerSubText="Enter Email and Password" 
          headerImage="https://media-exp1.licdn.com/dms/image/C510BAQFFEDwhEhH1nw/company-logo_200_200/0/1542181185790?e=2159024400&v=beta&t=-fCrx1xapE6g1VkcFEFGLHFUrkY_cHvKDiumjeOzKKE" 
        />
        <View style={styles.containerStyle}>
          <Text style={styles.textStyle}>Email</Text>
          <TextInput 
            style={styles.inputStyle}
            placeholder="user@gmail.com"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            autoCapitalize="none"
            autoCorrect={false} 
            keyboardType="email-address"
          />
          <Text style={styles.textStyle}>Password</Text>
          <TextInput 
            style={styles.inputStyle}
            secureTextEntry
            placeholder="password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            autoCapitalize="none"
            autoCorrect={false} 
            keyboardType="email-address"
          />
          <Text>{this.state.error}</Text>
        </View>

        <View style={styles.buttonViewStyle}>
          {this.renderButton()}
        </View>
        <View style={styles.footerView}>
          <Text style={styles.footerText}>Don't have an account? 
            <Text onPress={() => this.props.navigation.navigate('Register')} style={styles.footerLink}>  Register</Text>
          </Text>
          <Text onPress={() => this.props.navigation.navigate('ForgotPassword')} style={styles.forgotPasswordStyle}>Forgot Password</Text>
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
    marginTop: 40,
  },
  textStyle: {
    fontSize: 17,
    fontWeight: '600',
    color: 'black'
  },
  inputStyle: {
    height: 40,
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: 'lightsteelblue',
    fontSize: 15,
    padding:10,
  },
  buttonViewStyle: {
    marginTop: 25,
    height:50,
  },
  footerLink: {
    color: "slateblue",
    fontSize: 18,
  },
  footerText: {
    fontSize: 18,
    color: 'black',
  },
  footerView: {
    alignItems:'center',
    marginVertical: 30,
  },
  forgotPasswordStyle:{
    color: "slateblue",
    fontSize: 18,
    marginVertical: 20,
  },
  errorTextStyle:{
    fontSize:16,
    color:'red',
  },
});

export default LoginForm;