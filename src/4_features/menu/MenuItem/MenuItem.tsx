import { useAppDispatch } from '@src/1_app/hooks';
import { add } from '@src/5_entities/cart/cart.slice';
import { CartItem } from '@src/5_entities/cart/cart.types';
import { MinusIcon, PlusIcon } from '@src/6_shared/assets/icons';
import { AppText } from '@src/6_shared/ui/AppText';
import { Button } from '@src/6_shared/ui/Button';
import { IButton } from '@src/6_shared/ui/IButton';
import { Row } from '@src/6_shared/ui/Row/Row';
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { styles } from './MenuItemStyle';

interface MenuItemProps {
  onPress: () => void;
  menu: CartItem;
}

export const MenuItem = ({ menu, onPress }: MenuItemProps) => {
  const dispatch = useAppDispatch();
  const increment = () => dispatch(add({ id: menu.id, digit: 1 }));
  const decrement = () => dispatch(add({ id: menu.id, digit: -1 }));
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
        {menu.quantity > 0 ? (
          <Row style={{ width: 115 }}>
            <IButton icon={MinusIcon} onPress={decrement} />
            <AppText>{menu.quantity}</AppText>
            <IButton icon={PlusIcon} onPress={increment} secondary />
          </Row>
        ) : (
          <View
            style={{
              width: 115,
              justifyContent: 'center',
            }}>
            <Button style={{ height: 40 }} onPress={increment} secondary>
              <AppText>Add</AppText>
            </Button>
          </View>
        )}

        {/*<AppText bold h2 orange>${menu.price}</AppText> */}
      </View>
    </TouchableOpacity>
  );
};
