import { AppText } from '@src/6_shared/ui/AppText';
import { View } from 'react-native';
import { MenuItem } from '../MenuItem/MenuItem';
import { MenusProps } from '../Menus';
import { styles } from './MenuItemsStyle';

interface MenuItemsProps extends MenusProps {}

export const MenuItems = ({ menus }: MenuItemsProps) => {
  if (!menus.length) {
    return (
      <View style={styles.empty}>
        <AppText h4 grey>
          Nothing Was Found
        </AppText>
      </View>
    );
  }

  return menus.map((menu, index) => (
    <MenuItem key={`key-${index}`} menu={menu} onPress={() => {}} />
  ));
};
