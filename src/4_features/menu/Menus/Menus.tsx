import { Menu } from '@src/5_entities/shop/shop.types';
import React from 'react';
import { MenuItems } from '../MenuItems';
import { MenuList } from '../MenuList';
import { StyleProp, ViewStyle } from 'react-native';

export interface MenusProps {
  menus: Menu[];
  horizontal?: boolean;
  flat?: boolean;
  footer?: React.JSX.Element;
  footerStyle?: StyleProp<ViewStyle>;
}

export const Menus = ({ flat, ...props }: MenusProps) => {
  const List = flat ? MenuList : MenuItems;
  return <List {...props} />;
};
