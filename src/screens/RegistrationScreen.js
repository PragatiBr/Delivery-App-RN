import React, { Component } from "react";
import { Text, StyleSheet, View, TextInput, ScrollView } from 'react-native';
import { Button, Spinner, Header } from '../components/common';

class Registration extends Component {
  state = { email: '', password: '', error: '', loading: false, name: '', phone: '' };

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }

    return (
      <Button>
        CREATE ACCOUNT
      </Button>
    );
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: 'lightgrey ', flex: 1 }}>
        <Header
          headerText="REGISTER"
          headerSubText="Register Now"
          headerImage="https://media-exp1.licdn.com/dms/image/C510BAQFFEDwhEhH1nw/company-logo_200_200/0/1542181185790?e=2159024400&v=beta&t=-fCrx1xapE6g1VkcFEFGLHFUrkY_cHvKDiumjeOzKKE"
        />
        <View style={styles.containerStyle}>
          <Text style={styles.textStyle}>Name</Text>
          <TextInput
            style={styles.inputStyle}
            placeholder="User"
            value={this.state.name}
            onChangeText={name => this.setState({ name })}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
          />
          <Text style={styles.textStyle}>Phone</Text>
          <TextInput
            style={styles.inputStyle}
            placeholder="+910000000000"
            value={this.state.phone}
            onChangeText={phone => this.setState({ phone })}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="phone-pad"
          />
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
            keyboardType="visible-password"
          />
          <Text>{this.state.error}</Text>
        </View>

        <View style={styles.buttonViewStyle}>
          {this.renderButton()}
        </View>
        <View style={styles.footerView}>
          <Text style={styles.footerText}>Already have an account?
            <Text onPress={() => this.props.navigation.navigate('Login')} style={styles.footerLink}>  Login</Text>
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    justifyContent: 'center',
    elevation: 1,
    marginHorizontal: 25,
    marginTop: 30,
  },
  textStyle: {
    fontSize: 17,
    fontWeight: '600',
    color: 'lightslategrey'
  },
  inputStyle: {
    height: 40,
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: 'lightsteelblue',
    fontSize: 15,
    padding: 10,
  },
  buttonViewStyle: {
    height: 50,
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
    alignItems: 'center',
    marginVertical: 10,
  },
  errorTextStyle: {
    fontSize: 16,
    color: 'red',
  }
});

export default Registration;