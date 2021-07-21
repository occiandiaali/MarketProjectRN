import React from 'react';

import {StyleSheet, TouchableOpacity, Text} from 'react-native';

export default function AppButton({title, onPress}) {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.btnTxt}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'teal',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    marginBottom: 8,
    width: '100%',
  },
  btnTxt: {
    color: '#fff',
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
