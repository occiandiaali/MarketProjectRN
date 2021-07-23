import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import IconCustom from '../components/IconCustom';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';
import colours from '../config/colours';

const menuItems = [
  {
    title: 'My Listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColour: colours.primary,
    },
  },
  {
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColour: colours.secondary,
    },
  },
];

export default function AccountScreen() {
  return (
    <Screen style={styles.screenStyle}>
      <View style={styles.container}>
        <ListItem
          image={require('../assets/cash.png')}
          title="Occian Diaali"
          subTitle="ocean.diaali@gmail.com"
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={menuItem => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({item}) => (
            <ListItem
              title={item.title}
              IconComponent={
                <IconCustom
                  name={item.icon.name}
                  backgroundColour={item.icon.backgroundColour}
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        title="Sign Out"
        IconComponent={<IconCustom name="logout" backgroundColour="#ffe66d" />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screenStyle: {
    backgroundColor: colours.light,
  },
});
