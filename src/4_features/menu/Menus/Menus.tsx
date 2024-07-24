import React from 'react';
import { MenuItems } from '../MenuItems';
import { MenuList } from '../MenuList';
import { Menu } from '@src/5_entities/shop/shop.types';

export interface MenusProps<T> {
  menus: T[];
  horizontal?: boolean;
  flat?: boolean;
  footer?: React.JSX.Element;
  gui: React.FC<{ menu: T }>;
}

export function Menus<T extends Menu>({ flat, ...props }: MenusProps<T>) {
  const List = flat ? MenuList : MenuItems;
  return <List {...props} />;
}
