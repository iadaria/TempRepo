import { Restaurant } from '@src/5_entities/shop/shop.types.ts';
import { AppImage } from '@src/6_shared/ui/AppImage/AppImage.tsx';
import { AppText } from '@src/6_shared/ui/AppText/AppText.tsx';
import React, { useCallback } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './RestaurantListStyle.ts';
import { GAP } from '@src/6_shared/consts/dimentsions.ts';
import { debugStyles } from '@src/6_shared/consts/debug.ts';

interface RestaurantListProps {
  restaurants: Restaurant[];
  horizontal?: boolean;
}

export const RestaurantList = ({
  restaurants,
  horizontal = true,
}: RestaurantListProps) => {
  //const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const numColumns = horizontal ? 1 : 2;
  const props = numColumns > 1 && { columnWrapperStyle: { gap: GAP } };
  const isEmpty = restaurants.length < 1;

  const ListFooterComponent = horizontal ? null : (
    <View style={{ height: GAP }} />
  );

  const style = {
    ...(!horizontal && styles.bottom),
  };

  const contentStyle = {
    gap: GAP,
    ...(isEmpty && horizontal && styles.empty),
  };

  const EmptyComponent = (
    <AppText h4 grey>
      Nothing was found
    </AppText>
  );

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
      style={style}
      numColumns={numColumns}
      horizontal={horizontal}
      contentContainerStyle={contentStyle}
      showsHorizontalScrollIndicator={false}
      data={restaurants}
      keyExtractor={(_, index) => `item-${index}`}
      renderItem={renderItem}
      ListFooterComponent={ListFooterComponent}
      ListEmptyComponent={EmptyComponent}
      {...props}
    />
  );
};
