import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface Props{
  title: String,
  position? : 'bl' | 'br'
  onPress : () => void
}
const FloatActionButton = ({ title , onPress, position = 'br'}: Props) => {

  return (
    <Pressable
      style={ ({pressed}) =>[
        styles.fabLocation ,
        (position === 'br' ?  styles.right : styles.left),
        pressed ? styles.morado : styles.blue,
        styles.fab,
      ]}
      onPress={onPress}
    >
      <View>
        <Text style={styles.fabText}>{title}</Text>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  fabLocation:{
    position:'absolute',
    bottom: 25,
  },
  right: {
    right: 25,
  },
  left : {
    left: 25,
  },
  morado: {
    backgroundColor : 'purple',
  },
  blue : {
    backgroundColor: 'blue',
  },
  fab: {
    borderRadius: 100,
    width: 60,
    height: 60,
    textAlign:'center',
    alignSelf : 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  fabText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
export default FloatActionButton;
