import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ErrorView({ text, style, styleText }) {
  return (
    <View style={[styles.containerStyle, style]}>
      <Text style={[styles.textStyle, styleText]}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    paddingHorizontal: 16,
    paddingVertical: 8
  },
  textStyle: {
    fontSize: 14,
    alignSelf: 'center',
    color: 'red'
  }
});

export default ErrorView;
