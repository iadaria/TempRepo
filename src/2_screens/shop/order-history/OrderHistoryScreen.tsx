import { View, Text } from 'react-native';
import React from 'react';
import { Box } from '@src/6_shared/ui/Box';
import { Header } from '@src/4_features/Header';
import { useFocus } from '@src/1_app/navigations/model/lib/hooks/useFocus';
import { focusOrdersScreen } from '@src/5_entities/order/order.services';
import { useSelector } from 'react-redux';
import { selectOrderItems } from '@src/5_entities/order/order.slice';
import { Menus } from '@src/4_features/menu/Menus';
import { OrderGUI } from './OrderGUI';

export const OrderHistoryScreen = () => {
  const items = useSelector(selectOrderItems);

  useFocus(focusOrdersScreen);

  return (
    <Box>
      <Header subtitle="Order history" />
      <Menus flat menus={items} gui={OrderGUI} />
    </Box>
  );
};
