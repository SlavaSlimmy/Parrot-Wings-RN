import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  FlatList, View, StyleSheet, ActivityIndicator
} from 'react-native';
import { ThemeContext } from 'react-native-elements';
// import { Button } from 'react-native-elements';

import {
  selectTransactions,
  getTransactionsList,
  selectLoaded,
  selectError
} from '../store/reducers/transactionsReducer';

import {
  selectToken,
} from '../store/reducers/authReducer';

import ErrorView from '../components/ErrorView';

import TransactionItem from '../components/TransactionItem';
// import MainBottomSheet from '../components/MainBottomSheet';

function Home() {
  const { theme } = useContext(ThemeContext);

  const dispatch = useDispatch();

  const token = useSelector(selectToken);
  const list = useSelector(selectTransactions);
  const loaded = useSelector(selectLoaded);
  const error = useSelector(selectError);

  React.useEffect(() => {
    dispatch(getTransactionsList(token));
  }, []);

  if (!loaded) {
    return (
      <View style={styles.spinnerStyle}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  if (error) {
    return (
      <ErrorView text={error} />
    );
  }

  const keyExtractor = (item) => item.id.toString();

  return (
    <FlatList
      keyExtractor={keyExtractor}
      data={list}
      renderItem={TransactionItem}
    />
  );
}

const styles = StyleSheet.create({
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Home;
