import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { Button, BottomSheet, ListItem } from 'react-native-elements';

import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from '../store/reducers/counterReducer';

import {
  selectUserInfo,
} from '../store/reducers/authReducer';

// import MainBottomSheet from '../components/MainBottomSheet';

export default function Home() {
  const dispatch = useDispatch();
  const { name, email, balance } = useSelector(selectUserInfo);

  const count = useSelector(selectCount);
  const [incrementAmount] = useState('2');

  const [isVisible, setIsVisible] = useState(false);
  const list = [
    { title: 'List Item 1' },
    { title: 'List Item 2' },
    {
      title: 'Cancel',
      containerStyle: { backgroundColor: 'red' },
      titleStyle: { color: 'white' },
      onPress: () => setIsVisible(false),
    },
  ];

  return (
    <View style={styles.container}>
      <Text>
        { name }
      </Text>
      <Text>{ email }</Text>
      <Text>{ balance }</Text>
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
      <Button
        title="Show"
        onPress={() => setIsVisible(true)}
      />
      <BottomSheet isVisible={isVisible}>
        {list.map((l) => (
          <ListItem key={l.title} containerStyle={l.containerStyle} onPress={l.onPress}>
            <ListItem.Content>
              <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </BottomSheet>
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
