import { FlatList } from 'react-native';
import { MenuItem } from '../MenuItem';
import { MenusProps } from '../Menus';
import { Menu } from '@src/5_entities/shop/shop.types';

interface MenuListProps extends MenusProps {}

export const MenuList = ({ menus, horizontal }: MenuListProps) => {
  const renderItem = ({ item }: { item: Menu }) => (
    <MenuItem menu={item} onPress={() => {}} />
  );

  return (
    <FlatList
      horizontal={horizontal}
      data={menus}
      keyExtractor={(_, index) => `item-${index}`}
      renderItem={renderItem}
    />
  );
};
