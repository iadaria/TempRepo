import { ListHeader } from '@src/4_features/ListHeader/ListHeader';
import { Menu } from '@src/5_entities/shop/shop.types';
import React from 'react';
import { FlatList } from 'react-native';
import { MenuItem } from '../MenuItem';

interface MenuListProps extends MenusProps {}

const MenuList = ({ menus, horizontal }: MenuListProps) => {
  const renderItem = ({ item }: { item: Menu }) => (
    <MenuItem menu={item} onPress={() => {}} />
  );

  return (
    <>
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
  return (
    <>
      <ListHeader title="Popular menu" link="View More" onPress={() => {}} />
      <MenuList {...props} />
    </>
  );
};
