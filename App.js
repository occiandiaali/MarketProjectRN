import React from 'react';
import {SafeAreaView} from 'react-native';
import Card from './app/components/Card';
import Screen from './app/components/Screen';
import ListItem from './app/components/ListItem';
import IconCustom from './app/components/IconCustom';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
//import { useDeviceOrientation } from '@react-native-community/hooks';

const App = () => {
  //return <WelcomeScreen />;
  // return <ViewImageScreen />;
  // return (
  //   <Card
  //     title="Lazy boy basket"
  //     subTitle="=N=13, 500"
  //     image={require('./app/assets/swinger.jpg')}
  //   />
  // );
  //return <ListingDetailsScreen />;
  // return <MessagesScreen />;
  // return <AccountScreen />;
  return <ListingsScreen />;
};

export default App;
