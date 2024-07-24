import { Menu } from '@src/5_entities/shop/shop.types';
import { AppText } from '@src/6_shared/ui/AppText';
import React from 'react';
import { Image, Pressable, TouchableOpacity, View } from 'react-native';
import { styles } from './MenuItemStyle';

interface MenuItemProps<T extends Menu> {
  onPress: () => void;
  menu: T;
  gui: React.FC<{ menu: T }>;
}

export function MenuItem<T extends Menu>({
  menu,
  onPress,
  gui: GUI,
}: MenuItemProps<T>) {
  const style = {
    ...styles.item,
    ...(menu.disabled && styles.disabled),
  };

  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Image style={styles.image} source={{ uri: menu.uri }} />
      <View style={styles.textAndPriceWrapper}>
        <View style={styles.column}>
          <AppText medium h4>
            {menu.name}
          </AppText>
          <AppText h4 grey>
            {menu.restaurantName}
          </AppText>
          <AppText bold green>
            $ {menu.price}
          </AppText>
        </View>
        {GUI && <GUI menu={menu} />}
      </View>
    </TouchableOpacity>
  );
}
