import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function IconCustom({
  name,
  iconSize = 40,
  backgroundColour = '#000',
  iconColour = '#fff',
}) {
  return (
    <View
      style={{
        width: iconSize,
        height: iconSize,
        borderRadius: iconSize / 2,
        backgroundColor: backgroundColour,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Icon name={name} color={iconColour} size={iconSize * 0.5} />
    </View>
  );
}

// const styles = StyleSheet.create({
// });
