import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const Slides = ({ data }) => {
  const renderLastSlide = i => {
    if (i === data.length - 1) {
      return (
        <TouchableOpacity style={styles.okButtonStyle}>
          <Text style={{color: 'white', fontSize: 20}}>
            Ok I got it!
          </Text>
        </TouchableOpacity>
      )
    }
  }

  const renderSlides = () => {
    return data.map((slide, i) => {
      return (
        <View
          key={slide.text}
          style={[styles.slideStyle, {backgroundColor: slide.color}]}
        >
          <Text style={styles.textStyle}>
            {slide.text}
          </Text>
          {renderLastSlide(i)}
        </View>
      );
    });
  }

  return (
    <ScrollView
      horizontal
      pagingEnabled
      //contentContainerStyle={{justifyContent: 'center'}}
    >
      {renderSlides()}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 25,
    //fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },
  slideStyle: {
    //justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH,
    padding: 20,
    paddingTop: SCREEN_HEIGHT / 2 - 40
  },
  okButtonStyle: {
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    marginTop: 40,
    borderRadius: 4
  }
})

export default Slides;