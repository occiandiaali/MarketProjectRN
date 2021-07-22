import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import ListItem from '../components/ListItem';

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
  },
  price: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default function ListingDetailsScreen() {
  return (
    <View>
      <Image style={styles.image} source={require('../assets/swinger.jpg')} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Lazy Boy Swinger Basket</Text>
        <Text style={styles.price}>=N= 13, 500:00</Text>
        <View style={styles.userContainer}>
          <ListItem
            image={require('../assets/cash.png')}
            title="Occian Diaali"
            subTitle="7 Listings"
          />
        </View>
      </View>
    </View>
  );
}
