import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Button, TextInput, ScrollView } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import ClockIcon from 'react-native-vector-icons/Feather';
import TagIcon from 'react-native-vector-icons/EvilIcons';
import RBSheet from "react-native-raw-bottom-sheet";

class CartScreen extends Component {
  state = { comment: '', coupon: '', counter: 0 }; 
  render() {
    return (
      <ScrollView>

        {/* HEADER SECTION */}
        <View style={{ flexDirection: 'row', margin: 20 }}>
          <Image source={require('../assets/images/The-London.png')} style={styles.imageStyle} />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.textStyle}>The London</Text>
            <Text ellipsizeMode="tail">All-day comfort food and weekend parties</Text>
            <View style={{ flexDirection: 'row', margin: 5 }}>
              <Text style={styles.itemTextStyle}><Icon name="star" style={{ color: 'orange' }} /> 4.3</Text>
              <Text style={styles.itemTextStyle}><ClockIcon name="clock" /> 20 MINS</Text>
              <Text style={styles.itemTextStyle}><Icon name="credit-card" />{'\u20B940'}</Text>
            </View>
          </View>
        </View>

        {/* ITEM CART SECTION */}
        <View style={{ backgroundColor:'white', paddingHorizontal:20, paddingTop: 20  }}>
          <Text style={styles.textStyle}>ITEMS IN CART</Text>
          <Separator />
          <View style={{ flexDirection: 'row', justifyContent:'space-around', alignItems:'center'}}>
            <Text style={styles.bodyText}>Panko-crumbed</Text>
            <Button title=" - " color='slateblue' onPress={() => this.setState({ counter: (counter-1) })} />
            <Text style={styles.bodyText}>{this.state.counter}</Text>
            <Button title=" + " color='slateblue' onPress={() => this.setState({ counter: (counter+1) })} />
            <Text style={styles.bodyText}>{'\u20B940'}</Text>
          </View>
          <Separator />
          <TextInput 
            placeholder="Write your comments/ suggestion"
            value={this.state.comment}
            onChangeText={comment => this.setState(comment)}
          />
        </View>

        {/* COUPON SECTION */}
        <View style={{ flexDirection:'row', marginVertical: 25, backgroundColor: 'white', justifyContent:'space-between', padding:10}}>
          <TagIcon name="tag" size={50} style={styles.iconStyle} />
          <TextInput 
            placeholder="COUPON"
            value={this.state.coupon}
            onChangeText={coupon => this.setState(coupon)}
            style={styles.inputStyle}
          />
          <TagIcon name="chevron-right" size={50} style={styles.iconStyle} />
        </View>

        {/* BILL DETAILS SECTION */}
        <View style={{ backgroundColor:'white', padding: 20}}>
          <Text style={styles.textStyle}>BILL DETAILS</Text>
          <View style={styles.billContainer}>
            <Text style={{ color: 'black', fontSize: 15 }}>Item Total</Text>
            <Text style={{ color: 'black', fontSize: 15 }}>{'\u20B9 40'}</Text>
          </View>
          <Separator />
          <View style={styles.billContainer}>
            <Text style={{ color: 'black', fontSize: 15 }}>Delivery Charges</Text>
            <Text style={{ color: 'black', fontSize: 15 }}>{'\u20B9 0'}</Text>
          </View>
          <Separator /> 
          <View style={styles.billContainer}>
            <Text style={{ color: 'red', fontSize: 15 }}>GST</Text>
            <Text style={{ color: 'red', fontSize: 15 }}>{'\u20B9 1.52'}</Text>
          </View>
          <Separator />
          <View style={styles.billContainer}>
            <Text style={{ color: 'black', fontWeight:'bold', fontSize: 18 }}>To Pay</Text>
            <Text style={{ color: 'black', fontWeight:'bold', fontSize: 18 }}>{'\u20B9 40'}</Text>
          </View>
          <Separator />
        </View>
        
      </ScrollView>
    );
  }
}

const Separator = () => (
  <View style={styles.separator} />
);

const styles = StyleSheet.create({
  imageStyle: {
    width: 100,
    height: 70,
  },
  itemTextStyle: {
    paddingRight: 15,
    fontSize: 15,
  },
  textStyle:{
    fontSize: 20, 
    fontWeight: 'bold', 
    color: 'slateblue', 
    paddingBottom: 5,
  },
  bodyText:{
    marginVertical: 15,
    fontSize: 16,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  iconStyle: { 
    alignItems:'center', 
    color:'black', 
    paddingVertical: 10,
  },
  inputStyle:{
    color:'black',
    paddingRight: 150,
  },
  billContainer: {
    flexDirection: 'row', 
    justifyContent:'space-between', 
    paddingHorizontal: 10, 
    paddingVertical:10,
  }
});

export default CartScreen;