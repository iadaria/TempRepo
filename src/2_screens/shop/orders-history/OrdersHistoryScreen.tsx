import { useFocus } from '@src/1_app/navigations/model/lib/hooks/useFocus';
import { Header } from '@src/4_features/Header';
import { fetchOrders } from '@src/5_entities/order/order.services';
import { selectOrders } from '@src/5_entities/order/order.slice';
import { log } from '@src/6_shared/lib/debug/log';
import { Box } from '@src/6_shared/ui/Box';
import React from 'react';
import { useSelector } from 'react-redux';
import { OrderItem } from './OrderItem/OrderItem';

export function OrdersHistoryScreen() {
  const orders = useSelector(selectOrders);

  useFocus(fetchOrders);
  return (
    <Box>
      <Header subtitle="Orders" />
      {orders.map((order, index) => (
        <OrderItem key={`item-${index}`} order={order} />
      ))}
    </Box>
  );
}
