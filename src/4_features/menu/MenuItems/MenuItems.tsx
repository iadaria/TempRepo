import { MenuItem } from '../MenuItem/MenuItem';
import { MenusProps } from '../Menus';

interface MenuItemsProps extends MenusProps {}

export const MenuItems = ({ menus }: MenuItemsProps) => {
  return menus.map((menu, index) => (
    <MenuItem key={`key-${index}`} menu={menu} onPress={() => {}} />
  ));
};
