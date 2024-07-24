import { useAppDispatch } from '@src/1_app/hooks';
import { cartAdd } from '@src/5_entities/cart/cart.services';
import { OrderItem, OrderStatus } from '@src/5_entities/order/order.types';
import { AppText } from '@src/6_shared/ui/AppText';
import { Button } from '@src/6_shared/ui/Button';
import React from 'react';
import { styles } from './OrderGUIStyle';
import { View } from 'react-native';

export const OrderGUI: React.FC<{ menu: OrderItem }> = ({ menu }) => {
  const dispatch = useAppDispatch();
  const increment = () => dispatch(cartAdd({ id: menu.id, digit: 1 }));

  const reorder = menu.status === OrderStatus.Done && (
    <Button style={styles.reoder} onPress={increment}>
      <AppText center h5 bold black>
        Reoder
      </AppText>
    </Button>
  );

  const others = menu.status !== OrderStatus.Done && (
    <View style={styles.process}>
      <AppText center h5 bold>
        {menu.status}
      </AppText>
    </View>
  );

  return (
    <>
      {reorder}
      {others}
    </>
  );
};
