import { Menu } from '@src/5_entities/shop/shop.types';
import { AppText } from '@src/6_shared/ui/AppText';
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { styles } from './MenuItemStyle';
import { logline } from '@src/6_shared/lib/debug/log';
import { IButton } from '@src/6_shared/ui/IButton';
import { MinusIcon, PlusIcon } from '@src/6_shared/assets/icons';
import { Row } from '@src/6_shared/ui/Row/Row';
import { CartItem } from '@src/5_entities/cart/cart.types';
import { useAppDispatch } from '@src/1_app/hooks';
import { add, decrement, increment } from '@src/5_entities/cart/cart.slice';

interface MenuItemProps {
  onPress: () => void;
  menu: CartItem;
}

export const MenuItem = ({ menu, onPress }: MenuItemProps) => {
  const dispatch = useAppDispatch();
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <Image style={styles.image} source={{ uri: menu.uri }} />
      <View style={styles.textAndPriceWrapper}>
        <View style={styles.column}>
          <AppText medium h4>
            {menu.name}
          </AppText>
          <AppText h4 grey>
            {menu.restaurantName}
          </AppText>
          <AppText bold green>
            $ {menu.price}
          </AppText>
        </View>
        <Row style={{ width: 115 }}>
          <IButton
            icon={MinusIcon}
            onPress={() => dispatch(add({ id: menu.id, digit: -1 }))}
          />
          <AppText>{menu.quantity}</AppText>
          <IButton
            icon={PlusIcon}
            onPress={() => dispatch(add({ id: menu.id, digit: 1 }))}
            secondary
          />
        </Row>
        {/*<AppText bold h2 orange>${menu.price}</AppText> */}
      </View>
    </TouchableOpacity>
  );
};
