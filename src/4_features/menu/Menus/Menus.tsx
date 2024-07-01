import { ListHeader } from '@src/4_features/ListHeader/ListHeader';
import { Menu } from '@src/5_entities/shop/shop.types';
import React from 'react';
import { MenuItems } from '../MenuItems';
import { MenuList } from '../MenuList';

export interface MenusProps {
  menus: Menu[];
  horizontal?: boolean;
  flat?: boolean;
}

export const Menus = ({ flat, ...props }: MenusProps) => {
  const List = flat ? MenuList : MenuItems;
  return (
    <>
      <ListHeader title="Popular menu" link="View More" onPress={() => {}} />
      <List {...props} />
    </>
  );
};
