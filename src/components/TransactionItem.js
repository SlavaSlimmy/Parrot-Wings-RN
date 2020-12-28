import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const styles = StyleSheet.create({
  amountRedTextStyle: {
    color: '#f44336',
  },
  amountTextStyle: {
    color: '#4caf50',
    fontSize: 16,
  },
  container: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  greyTextStyle: {
    color: '#9e9e9e',
    fontSize: 12,
  },
  leftBlockStyle: {
    flex: 1,
    flexDirection: 'column',
  },
  rightBlockStyle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  touchableStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  usernameStyle: {
    fontSize: 16,
  },
});

function TransactionItem({ item }) {
  const { username, date, amount, balance } = item;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          console.log('pressed', item);
        }}
      >
        <View style={styles.touchableStyle}>
          <View style={styles.leftBlockStyle}>
            <Text style={styles.usernameStyle}>{username}</Text>
            <Text style={styles.greyTextStyle}>{date}</Text>
          </View>
          <View style={styles.rightBlockStyle}>
            <Text style={[styles.rightTextStyle, styles.amountTextStyle, amount < 0 && styles.amountRedTextStyle]}>
              {amount}
            </Text>
            <Text style={styles.greyTextStyle}>{balance}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default TransactionItem;
