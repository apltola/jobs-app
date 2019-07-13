import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

const Slides = ({ data }) => {

  const renderSlides = () => {
    return data.map(slide => {
      console.log(slide.text);
      return (
        <View key={slide.text} style={styles.slideStyle}>
          <Text style={styles.textStyle}>
            {slide.text}
          </Text>
        </View>
      );
    });
  }

  return (
    <ScrollView
      horizontal
      style={styles.viewStyle}
      //contentContainerStyle={{justifyContent: 'center'}}
    >
      {renderSlides()}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    //borderWidth: 1,
    //borderColor: 'black',
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  slideStyle: {
    borderWidth: 1,
    borderColor: 'green',
    justifyContent: 'center'
  }
})

export default Slides;