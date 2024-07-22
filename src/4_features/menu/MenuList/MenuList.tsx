import { Menu } from '@src/5_entities/shop/shop.types';
import { GAP } from '@src/6_shared/consts/dimentsions';
import { AppText } from '@src/6_shared/ui/AppText';
import { FlatList } from 'react-native';
import { MenuItem } from '../MenuItem';
import { MenusProps } from '../Menus';
import { CartItem } from '@src/5_entities/cart/cart.types';

interface MenuListProps extends MenusProps {}

export const MenuList = ({
  menus,
  horizontal,
  footer,
  footerStyle,
}: MenuListProps) => {
  const EmptyComponent = (
    <AppText h4 grey>
      Nothing Was Found
    </AppText>
  );

  const renderItem = ({ item }: { item: CartItem }) => (
    <MenuItem menu={item} onPress={() => {}} />
  );

  return (
    <FlatList
      style={{ marginBottom: 150 }}
      contentContainerStyle={{ gap: GAP }}
      horizontal={horizontal}
      data={menus}
      keyExtractor={(_, index) => `item-${index}`}
      renderItem={renderItem}
      ListEmptyComponent={EmptyComponent}
      ListFooterComponent={footer}
      ListFooterComponentStyle={footerStyle}
    />
  );
};
