import { Menu } from '@src/5_entities/shop/shop.types';
import { AppText } from '@src/6_shared/ui/AppText';
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { styles } from './MenuItemStyle';

interface MenuItemProps {
  onPress: () => void;
  menu: Menu;
}

export const MenuItem = ({ menu, onPress }: MenuItemProps) => {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <Image style={styles.image} source={{ uri: menu.uri }} />
      <View style={styles.textAndPriceWrapper}>
        <View style={styles.column}>
          <AppText medium h4>
            {menu.name}
          </AppText>
          <AppText h4 grey>
            {menu.restaurantName}
          </AppText>
        </View>
        <AppText bold h2 orange>
          ${menu.price}
        </AppText>
      </View>
    </TouchableOpacity>
  );
};
