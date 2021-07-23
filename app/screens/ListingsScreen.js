import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Card from '../components/Card';

import Screen from '../components/Screen';

const listings = [
  {
    id: 1,
    title: 'Basket Swinger',
    price: 13550,
    image: require('../assets/swinger.jpg'),
  },
  {
    id: 2,
    title: 'Welcome Store Front',
    price: 550,
    image: require('../assets/welcome.png'),
  },
];

export default function ListingsScreen() {
  return (
    <Screen>
      <FlatList
        data={listings}
        keyExtractor={listing => listing.id.toString()}
        renderItem={({item}) => (
          <Card
            image={item.image}
            title={item.title}
            subTitle={'₦' + item.price}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
