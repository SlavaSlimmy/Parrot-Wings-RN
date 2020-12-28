import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function AddTransaction() {
  return (
    <View style={styles.container}>
      <Text>AddTransaction</Text>
    </View>
  );
}

export default AddTransaction;
