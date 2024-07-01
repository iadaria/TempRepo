import {
  View,
  Text,
  FlatList,
  Touchable,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import { ListHeader } from '../ListHeader/ListHeader';
import { Menu } from '@src/5_entities/shop/shop.types';
import { AppText } from '@src/6_shared/ui/AppText';
import { styles } from './MenuStyle';
import { log } from '@src/6_shared/lib/debug/log';

interface MenuItemProps {
  onPress: () => void;
  menu: Menu;
}

const MenuItem = ({ menu, onPress }: MenuItemProps) => {
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

interface MenuListProps extends MenusProps {}

const MenuList = ({ menus, horizontal }: MenuListProps) => {
  const renderItem = ({ item }: { item: Menu }) => (
    <MenuItem menu={item} onPress={() => {}} />
  );

  return (
    <>
      <ListHeader title="Popular menu" link="View More" onPress={() => {}} />
      <FlatList
        horizontal={horizontal}
        data={menus}
        keyExtractor={(_, index) => `item-${index}`}
        renderItem={renderItem}
      />
    </>
  );
};

interface MenusProps {
  menus: Menu[];
  horizontal?: boolean;
  flat?: boolean;
}

export const Menus = (props: MenusProps) => {
  return <MenuList {...props} />;
};
