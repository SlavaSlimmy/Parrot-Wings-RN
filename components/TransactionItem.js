import React from 'react';
import {
  View, StyleSheet, TouchableOpacity, Text
} from 'react-native';

function TransactionItem(props) {
  const {
    item
  } = props;

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
            <Text style={[styles.rightTextStyle,
              styles.amountTextStyle, amount < 0 && styles.amountRedTextStyle]}
            >
              { amount }
            </Text>
            <Text style={[styles.rightTextStyle, styles.greyTextStyle]}>
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
    flexDirection: 'column'
  },
  rightTextStyle: {
    textAlign: 'right'
  },
  usernameStyle: {
    fontSize: 16
  },
  amountTextStyle: {
    fontSize: 16,
    color: '#4caf50'
  },
  amountRedTextStyle: {
    color: '#f44336'
  },
  greyTextStyle: {
    fontSize: 12,
    color: '#9e9e9e'
  }
});

export default TransactionItem;
