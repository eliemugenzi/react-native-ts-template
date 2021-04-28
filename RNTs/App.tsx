import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const App = () => {
  return (
    <View style={styles.wrapper}>
      <Text>Hello World</Text>
    </View>
  );
};

export default App;
