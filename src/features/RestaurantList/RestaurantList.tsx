import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import React, { useCallback } from 'react';
import { styles } from './RestaurantListStyle.ts';
import { log } from '@src/shared/lib/debug/log.ts';
import { Restaurant } from '@src/entities/shop/shop.types.ts';
import { AppImage } from '@src/shared/ui/AppImage/AppImage.tsx';

interface RestaurantListProps {
  restaurants: Restaurant[];
}

export const RestaurantList = ({ restaurants }: RestaurantListProps) => {
  /* const ListHeader = () => (
    <View style={styles.wrapperHeader}>
      <Text style={styles.header}>Nearest Restaurant</Text>
      <TouchableOpacity
        onPress={() => {
          log('', 'Cliked View More Restaurants');
        }}>
        <Text style={styles.headerLink}>View More</Text>
      </TouchableOpacity>
    </View>
  ); */

  const renderItem = useCallback(({ item }: { item: Restaurant }) => {
    return (
      <TouchableOpacity
        style={styles.restCard}
        onPress={() => console.log('Clicked', item)}>
        <AppImage uri={item.img} />

        <View style={styles.itemContainer}>
          <Text style={styles.name}> {item.name}</Text>
          <Text style={styles.time}>12 Mins</Text>
        </View>
      </TouchableOpacity>
    );
  }, []);
  return (
    <>
      {/* <ListHeader /> */}
      <FlatList
        horizontal
        contentContainerStyle={{ gap: 20 }}
        //columnWrapperStyle={{ gap: 20 }}
        //ListHeaderComponent={ListHeader}
        data={restaurants}
        keyExtractor={(_, index) => `item-${index}`}
        renderItem={renderItem}
      />
    </>
  );
};
