import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from '../store/reducers/counterReducer';

export default function Home() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount] = useState('2');

  return (
    <View style={styles.container}>
      <Button
        title="+"
        onPress={() => dispatch(increment())}
      />
      <Text style={styles.text}>{count}</Text>
      <Button
        title="-"
        onPress={() => dispatch(decrement())}
      />
      <Button
        title="Add Amount"
        onPress={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}
      />
      <Button
        title="Add Async"
        onPress={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'red'
  }
});
