import { Menu } from '@src/5_entities/shop/shop.types';
import { GAP } from '@src/6_shared/consts/dimentsions';
import { AppText } from '@src/6_shared/ui/AppText';
import { FlatList } from 'react-native';
import { MenuItem } from '../MenuItem';
import { MenusProps } from '../Menus';

interface MenuListProps<T> extends MenusProps<T> {}

export function MenuList<T extends Menu>({
  menus,
  horizontal,
  footer,
  gui,
}: MenuListProps<T>) {
  const EmptyComponent = (
    <AppText h4 grey>
      Nothing Was Found
    </AppText>
  );

  const renderItem = ({ item }: { item: T }) => (
    <MenuItem menu={item} gui={gui} onPress={() => {}} />
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
    />
  );
}
