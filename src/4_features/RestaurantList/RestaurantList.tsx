import { Restaurant } from '@src/5_entities/shop/shop.types.ts';
import { AppImage } from '@src/6_shared/ui/AppImage/AppImage.tsx';
import { AppText } from '@src/6_shared/ui/AppText/AppText.tsx';
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
  //const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

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
    <FlatList
      horizontal={horizontal}
      contentContainerStyle={{ gap: 20 }}
      //columnWrapperStyle={{ gap: 20 }}
      showsHorizontalScrollIndicator={false}
      data={restaurants}
      keyExtractor={(_, index) => `item-${index}`}
      renderItem={renderItem}
    />
  );
};
