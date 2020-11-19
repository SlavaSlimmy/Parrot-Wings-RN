import React, { useContext } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { ThemeContext } from 'react-native-elements';

export default function SplashScreen() {
  const { theme } = useContext(ThemeContext);
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  spinnerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
