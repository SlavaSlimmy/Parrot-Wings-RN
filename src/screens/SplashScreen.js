import React, { useContext } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { ThemeContext } from 'react-native-elements';

const styles = StyleSheet.create({
  spinnerStyle: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default function SplashScreen() {
  const { theme } = useContext(ThemeContext);
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </View>
  );
}
