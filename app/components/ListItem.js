import React from 'react';
import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';

import {Swipeable} from 'react-native-gesture-handler';

import colours from '../config/colours';

export default function ListItem({
  image,
  IconComponent,
  title,
  subTitle,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colours.light} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.listDetails}>
            <Text style={styles.title}>{title}</Text>
            {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#fff',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  listDetails: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  subTitle: {
    color: '#cc99ef',
    // color: colours.medium,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
  },
});
