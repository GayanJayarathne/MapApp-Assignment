import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapScreen from './screens/MapScreen'; // Adjust the path if necessary

export default function App() {
  return (
      <View style={styles.container}>
        <MapScreen />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
