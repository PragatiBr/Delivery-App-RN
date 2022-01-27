import React, { Component } from "react";
import { SliderBox } from 'react-native-image-slider-box';
import { View, StyleSheet, Text } from 'react-native';

class SliderScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require('../assets/images/burger.jpg'),
        require('../assets/images/noodles.jpg'),
        require('../assets/images/pasta.jpg'),
        require('../assets/images/pizza.jpg'),
        require('../assets/images/sandwich.jpg'),
        require('../assets/images/thali.jpg'),
      ]
    };
  }

  onLayout = e => {
    this.setState({
      width: e.nativeEvent.layout.width
    });
  };

  render() {
    return (
      <View style={styles.container} onLayout={this.onLayout}>
        <Text style={styles.textStyle}>Most Popular</Text>
        <SliderBox
          images={this.state.images}
          sliderBoxHeight={180}
          onCurrentImagePressed={() => this.props.onPress.navigate("Category")}
          dotColor="slateblue"
          inactiveDotColor="#90A4AE"
          paginationBoxVerticalPadding={10}
          parentWidth={this.state.width}
          autoplay
          circleLoop
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  textStyle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'slateblue',
    marginBottom: 10,
  },
});

export default SliderScreen;