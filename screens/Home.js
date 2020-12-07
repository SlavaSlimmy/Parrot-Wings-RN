import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  FlatList, View, StyleSheet, ActivityIndicator
} from 'react-native';
import { ThemeContext, Button, Icon } from 'react-native-elements';
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

function Home(props) {
  const { navigation } = props;
  const { theme } = useContext(ThemeContext);

  const dispatch = useDispatch();

  const token = useSelector(selectToken);
  const list = useSelector(selectTransactions);
  const loaded = useSelector(selectLoaded);
  const error = useSelector(selectError);

  React.useEffect(() => {
    dispatch(getTransactionsList(token));
  }, []);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button
          title="Menu"
          type="clear"
          titleStyle={styles.btnStyle}
          icon={(
            <Icon
              type="material"
              name="menu"
              size={24}
              color="white"
            />
          )}
          onPress={() => { navigation.navigate('MenuModal'); }}
        />
      ),
      headerRight: () => (
        <Button
          title="Add"
          type="clear"
          titleStyle={styles.btnStyle}
          icon={(
            <Icon
              type="material"
              name="library-add"
              size={24}
              color="white"
            />
          )}
          onPress={() => { navigation.navigate('AddTransaction'); }}
        />
      ),
    });
  }, [navigation, dispatch]);

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
    <View style={styles.container}>
      <FlatList
        keyExtractor={keyExtractor}
        data={list}
        renderItem={TransactionItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: '16px'
  },
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnStyle: {
    display: 'none'
  }
});

export default Home;
