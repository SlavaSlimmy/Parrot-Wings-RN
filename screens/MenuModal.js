/* eslint-disable react-native/no-raw-text */
/* eslint-disable no-param-reassign */
import React from 'react';
import { useDispatch } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import {
  sortTransactions
} from '../store/reducers/transactionsReducer';

import {
  logout
} from '../store/reducers/authReducer';

const sortList = [
  {
    title: 'Sort by date',
    icon: 'date-range',
    value: 'date',
  },
  {
    title: 'Sort by name',
    icon: 'sort-by-alpha',
    value: 'username',
  },
  {
    title: 'Sort by amount',
    icon: 'attach-money',
    value: 'amount',
  },
];

function MenuModal({ navigation }) {
  const dispatch = useDispatch();

  const pressItem = (curItem) => {
    dispatch(sortTransactions({ orderBy: curItem.value, order: 'desc' }));
    navigation.goBack();
  };

  const Logout = () => {
    console.log('logout');
    dispatch(logout());
  };

  return (
    <View style={styles.container}>
      {
        sortList.map((item) => (
          <ListItem key={item.value} bottomDivider onPress={() => { pressItem(item); }}>
            <Icon name={item.icon} />
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))
      }
      <ListItem bottomDivider onPress={() => { Logout(); }}>
        <Icon name="exit-to-app" />
        <ListItem.Content>
          <ListItem.Title>Logout</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default MenuModal;
