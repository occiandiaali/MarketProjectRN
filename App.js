import React from 'react';
import {SafeAreaView} from 'react-native';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
//import { useDeviceOrientation } from '@react-native-community/hooks';

const App = () => {
  //return <WelcomeScreen />;
  return <ViewImageScreen />;
  // return (
  //   <Card
  //     title="Lazy boy basket"
  //     subTitle="=N=13, 500"
  //     image={require('./app/assets/swinger.jpg')}
  //   />
  // );
  //return <ListingDetailsScreen />;
};

export default App;
