import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.text1]}>おはよう！</Text>
      <Text style={[styles.text, styles.text2]}>こんにちは！</Text>
      <Text style={[styles.text, styles.text3]}>How you doing</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  text1: {
    color: '#ffac8e',
  },
  text2: {
    color: '#fd7792',
  },
  text3: {
    color: '#55ae95',
    fontSize: 40,
  },

  container: {
    flex: 1,
    backgroundColor: '#3f4d71',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
