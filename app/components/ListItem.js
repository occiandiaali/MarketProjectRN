import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import colours from '../config/colours';

export default function ListItem({image, title, subTitle}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.listDetails}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  listDetails: {},
  subTitle: {
    color: '#cc99ef',
    // color: colours.medium,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
  },
});
