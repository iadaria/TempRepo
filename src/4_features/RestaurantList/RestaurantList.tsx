import { Restaurant } from '@src/5_entities/shop/shop.types.ts';
import { AppImage } from '@src/6_shared/ui/AppImage/AppImage.tsx';
import { AppText } from '@src/6_shared/ui/AppText/AppText.tsx';
import React, { useCallback } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { ListHeader } from '../ListHeader/ListHeader.tsx';
import { styles } from './RestaurantListStyle.ts';
import { useNavigation } from '@react-navigation/native';
import { routes } from '@src/6_shared/consts/routes.ts';

interface RestaurantListProps {
  restaurants: Restaurant[];
  horizontal?: boolean;
}

const { shop } = routes;

export const RestaurantList = ({
  restaurants,
  horizontal = true,
}: RestaurantListProps) => {
  const navigation = useNavigation();

  const renderItem = useCallback(({ item }: { item: Restaurant }) => {
    return (
      <TouchableOpacity style={styles.restCard} onPress={() => {}}>
        <AppImage uri={item.img} />

        <View style={styles.itemContainer}>
          <AppText h3 bold>
            {item.name}
          </AppText>
          <Text style={styles.time}>12 Mins</Text>
        </View>
      </TouchableOpacity>
    );
  }, []);

  return (
    <>
      <ListHeader
        title="Nearest Restaurant"
        link="View more"
        onPress={() => navigation.navigate(shop.PopularRestorants)}
      />
      <FlatList
        horizontal={horizontal}
        contentContainerStyle={{ gap: 20 }}
        //columnWrapperStyle={{ gap: 20 }}
        showsHorizontalScrollIndicator={false}
        data={restaurants}
        keyExtractor={(_, index) => `item-${index}`}
        renderItem={renderItem}
      />
    </>
  );
};
