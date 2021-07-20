import React from 'react';
import {View, ImageBackground, StyleSheet, Image} from 'react-native';

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={{
        uri: 'https://images.pexels.com/photos/1745747/pexels-photo-1745747.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      }}>
      {/* <Image
        style={styles.logo}
        source={require('../assets/welcome.png')}
        alt="logo"
      /> */}
      <View style={styles.loginBtn} />
      <View style={styles.regBtn} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  loginBtn: {
    width: '100%',
    height: 70,
    backgroundColor: 'teal',
  },
  //   logo: {
  //     width: 200,
  //     height: 200,
  //     position: 'absolute',
  //     top: 50,
  //     left: 100,
  //   },
  regBtn: {
    width: '100%',
    height: 70,
    backgroundColor: 'tomato',
  },
});

export default WelcomeScreen;
