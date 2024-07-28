import { useAppDispatch } from '@src/1_app/hooks';
import { navigate } from '@src/1_app/navigations/RootNavigation';
import { pickOrder } from '@src/5_entities/order/order.slice';
import { Order } from '@src/5_entities/order/order.types';
import { routes } from '@src/6_shared/consts/routes';
import { formatter } from '@src/6_shared/lib/date/formatter';
import { AppText } from '@src/6_shared/ui/AppText';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { styles } from './OrderItemStyle';

interface OrderItemProps {
  order: Order;
}

export function OrderItem({ order }: OrderItemProps) {
  const dispatch = useAppDispatch();
  function seeOrderDetails() {
    dispatch(pickOrder(order));
    navigate(routes.cart.OrderHistory);
  }

  console.log('OrderIte', order.date);
  console.log(typeof order.date);

  return (
    <TouchableOpacity style={styles.order} onPress={seeOrderDetails}>
      <AppText>{`${formatter.format(new Date(order.date))}, ${
        order.totalAmount
      } $, ${order.status}`}</AppText>
    </TouchableOpacity>
  );
}
