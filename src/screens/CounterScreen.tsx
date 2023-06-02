import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FloatActionButton from '../components/FloatActionButton';

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>

      <Text style={styles.head}>
        Counter : {counter}
      </Text>
      <FloatActionButton
        title="+1"
        onPress={() => setCounter(counter + 1)}
      />
      <FloatActionButton
        title="-1"
        position="bl"
        onPress={() => setCounter(counter - 1)}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  head: {
    fontSize: 45,
    textAlign: 'center',
    top: -15,
  },
});
export default CounterScreen;
