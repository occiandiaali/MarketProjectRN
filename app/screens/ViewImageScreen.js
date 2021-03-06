import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <Icon name="close" color="white" size={35} />
      </View>
      <View style={styles.delIcon}>
        <Icon name="trash-can-outline" color="white" size={35} />
      </View>
      <Image
        resizeMode="contain"
        style={styles.img}
        source={require('../assets/swinger.jpg')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    // width: 50,
    // height: 50,
    // backgroundColor: '#fc5c65',
    position: 'absolute',
    top: 40,
    left: 30,
  },
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  delIcon: {
    // width: 50,
    // height: 50,
    // backgroundColor: '#4ecdc4',
    position: 'absolute',
    top: 40,
    right: 30,
  },
  img: {
    width: '100%',
    height: '100%',
  },
});

export default ViewImageScreen;
