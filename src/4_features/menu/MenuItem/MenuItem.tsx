import { useAppDispatch } from '@src/1_app/hooks';
import { add, selectStatus } from '@src/5_entities/cart/cart.slice';
import { CartItem } from '@src/5_entities/cart/cart.types';
import { MinusIcon, PlusIcon } from '@src/6_shared/assets/icons';
import { AppText } from '@src/6_shared/ui/AppText';
import { Button } from '@src/6_shared/ui/Button';
import { IButton } from '@src/6_shared/ui/IButton';
import { Row } from '@src/6_shared/ui/Row/Row';
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { styles } from './MenuItemStyle';
import { cartAdd } from '@src/5_entities/cart/cart.services';
import { useSelector } from 'react-redux';

interface MenuItemProps {
  onPress: () => void;
  menu: CartItem;
}

export const MenuItem = ({ menu, onPress }: MenuItemProps) => {
  const dispatch = useAppDispatch();

  const status = useSelector(selectStatus);

  const increment = () => dispatch(cartAdd({ id: menu.id, digit: 1 }));
  const decrement = () => dispatch(cartAdd({ id: menu.id, digit: -1 }));
  const disabled = status == 'loading';

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
          <Row style={styles.menu}>
            <IButton disabled={disabled} icon={MinusIcon} onPress={decrement} />
            <AppText>{menu.quantity}</AppText>
            <IButton
              disabled={disabled}
              icon={PlusIcon}
              onPress={increment}
              secondary
            />
          </Row>
        ) : (
          <Button style={styles.add} onPress={increment} secondary>
            <AppText>Add</AppText>
          </Button>
        )}

        {/*<AppText bold h2 orange>${menu.price}</AppText> */}
      </View>
    </TouchableOpacity>
  );
};
