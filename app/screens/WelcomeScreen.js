import React from 'react';
import {
  View,
  Text,
  Button,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      blurRadius={1}
      source={{
        uri: 'https://images.pexels.com/photos/1745747/pexels-photo-1745747.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      }}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/cash.png')} />
        <Text style={styles.label}>Buy and Sell Anything!</Text>
      </View>
      <View style={styles.btnsContainer}>
        <AppButton
          title="Login"
          onPress={() => console.log('Tapped login...')}
        />
        <AppButton title="Register" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  btnsContainer: {
    margin: 6,
  },
  label: {
    fontSize: 35,
    fontWeight: 'bold',
    shadowColor: '#000',
    color: '#FFF',
  },
  logo: {
    width: 180,
    height: 180,

    alignSelf: 'center',
  },
  logoContainer: {
    position: 'absolute',
    top: 55,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default WelcomeScreen;
