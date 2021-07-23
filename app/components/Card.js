import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default function Card({title, subTitle, image}) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 25,
    backgroundColor: '#fff',
    margin: 15,
    overflow: 'hidden',
  },
  detailsContainer: {
    padding: 18,
  },
  image: {
    width: '100%',
    height: 200,
  },
  subTitle: {
    fontSize: 16,
    color: 'green',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 21,
    marginBottom: 6,
  },
});
