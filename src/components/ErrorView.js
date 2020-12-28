import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerStyle: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  textStyle: {
    alignSelf: 'center',
    color: 'red',
    fontSize: 14,
  },
});

function ErrorView({ text, style, styleText }) {
  return (
    <View style={[styles.containerStyle, style]}>
      <Text style={[styles.textStyle, styleText]}>{text}</Text>
    </View>
  );
}

export default ErrorView;
