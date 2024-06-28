import { Restaurant } from '@src/5_entities/shop/shop.types.ts';
import { log } from '@src/shared/lib/debug/log.ts';
import { AppImage } from '@src/shared/ui/AppImage/AppImage.tsx';
import React, { useCallback } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './RestaurantListStyle.ts';

interface RestaurantListProps {
  restaurants: Restaurant[];
  horizontal?: boolean;
}

export const RestaurantList = ({
  restaurants,
  horizontal = true,
}: RestaurantListProps) => {
  const ListHeader = () => (
    <View style={styles.wrapperHeader}>
      <Text style={styles.header}>Nearest Restaurant</Text>
      <TouchableOpacity
        onPress={() => {
          log(RestaurantList.name, 'Cliked View More Restaurants');
        }}>
        <Text style={styles.headerLink}>View More</Text>
      </TouchableOpacity>
    </View>
  );

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
      <ListHeader />
      <FlatList
        horizontal={horizontal}
        contentContainerStyle={{ gap: 20 }}
        //columnWrapperStyle={{ gap: 20 }}
        //ListHeaderComponent={ListHeader}
        showsHorizontalScrollIndicator={false}
        data={restaurants}
        keyExtractor={(_, index) => `item-${index}`}
        renderItem={renderItem}
      />
    </>
  );
};
