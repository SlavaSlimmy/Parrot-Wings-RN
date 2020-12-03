import React from 'react';
import {
  View, StyleSheet, TouchableOpacity, Text
} from 'react-native';
import { Badge } from 'react-native-elements';

function TransactionItem({ item }) {

  const {
    username, date, amount, balance
  } = item;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => { console.log('pressed', item); }}>
        <View style={styles.touchableStyle}>
          <View style={styles.leftBlockStyle}>
            <Text style={styles.usernameStyle}>
              { username }
            </Text>
            <Text style={styles.greyTextStyle}>
              { date }
            </Text>
          </View>
          <View style={styles.rightBlockStyle}>
            <Badge textStyle={styles.badgeTextStyle} badgeStyle={styles.badgeStyle} value={amount} status={amount < 0 ? 'error' : 'success'} />
            <Text style={styles.greyTextStyle}>
              { balance }
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  touchableStyle: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'center'
  },
  leftBlockStyle: {
    flex: 1,
    flexDirection: 'column',
  },
  rightBlockStyle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end'
  },
  usernameStyle: {
    fontSize: 16
  },
  badgeTextStyle: {
    fontSize: 16,
  },
  badgeStyle: {
    height: 24,
    borderRadius: 12,
    flex: 1,
  },
  greyTextStyle: {
    fontSize: 12,
    color: '#9e9e9e'
  }
});

export default TransactionItem;
