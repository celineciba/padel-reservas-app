import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { BookingScreen } from './src/screens/BookingScreen';
import { colors } from './src/theme/colors';

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />
      <BookingScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.background
  }
});
