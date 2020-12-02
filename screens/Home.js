import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { FlatList } from 'react-native';
// import { Button } from 'react-native-elements';

// import {
//   selectUserInfo,
// } from '../store/reducers/authReducer';

import TransactionItem from '../components/TransactionItem';
// import MainBottomSheet from '../components/MainBottomSheet';

function Home() {
  // const dispatch = useDispatch();
  // const { name, email, balance } = useSelector(selectUserInfo);

  const list = [
    {
      id: 1, date: 'date 1', username: 'name 1', amount: 100, balance: 400
    },
    {
      id: 2, date: 'date 2', username: 'name 2', amount: -100, balance: 300
    },
  ];

  const keyExtractor = (item) => item.id.toString();

  return (
    <FlatList
      keyExtractor={keyExtractor}
      data={list}
      renderItem={TransactionItem}
    />
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     color: 'red'
//   }
// });

export default Home;
