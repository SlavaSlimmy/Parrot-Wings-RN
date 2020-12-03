import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function AddTransaction() {
  return (
    <View style={styles.container}>
      <Text>AddTransaction</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default AddTransaction;
