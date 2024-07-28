import { goBack } from '@src/1_app/navigations/RootNavigation';
import { Header } from '@src/4_features/Header';
import { Menus } from '@src/4_features/menu/Menus';
import { selectOrder } from '@src/5_entities/order/order.slice';
import { Box } from '@src/6_shared/ui/Box';
import React from 'react';
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';
import { OrderGUI } from './OrderGUI';

export const OrderHistoryScreen = () => {
  const order = useSelector(selectOrder);

  if (!order) {
    Alert.alert('Something goes wrong. Select an order.');
    goBack();
    return null;
  }

  return (
    <Box>
      <Header subtitle="Order history" />
      <Menus flat menus={order.items} gui={OrderGUI} />
    </Box>
  );
};
