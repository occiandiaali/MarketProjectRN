import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import colours from '../config/colours';

export default function ListItemSeparator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    width: '95%',
    height: 1,
    backgroundColor: colours.medium,
    alignSelf: 'center',
  },
});
