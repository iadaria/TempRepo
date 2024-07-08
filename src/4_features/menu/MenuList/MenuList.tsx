import { FlatList } from 'react-native';
import { MenuItem } from '../MenuItem';
import { MenusProps } from '../Menus';
import { Menu } from '@src/5_entities/shop/shop.types';
import { GAP } from '@src/6_shared/consts/dimentsions';

interface MenuListProps extends MenusProps {}

export const MenuList = ({ menus, horizontal }: MenuListProps) => {
  const renderItem = ({ item }: { item: Menu }) => (
    <MenuItem menu={item} onPress={() => {}} />
  );

  return (
    <FlatList
      style={{ marginBottom: 250 }}
      contentContainerStyle={{ gap: GAP }}
      horizontal={horizontal}
      data={menus}
      keyExtractor={(_, index) => `item-${index}`}
      renderItem={renderItem}
    />
  );
};
