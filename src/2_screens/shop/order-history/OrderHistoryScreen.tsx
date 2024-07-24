import { View, Text } from 'react-native';
import React from 'react';
import { Box } from '@src/6_shared/ui/Box';
import { Header } from '@src/4_features/Header';
import { useFocus } from '@src/1_app/navigations/model/lib/hooks/useFocus';
import { focusOrdersScreen } from '@src/5_entities/order/order.services';

export const OrderHistoryScreen = () => {
  useFocus(focusOrdersScreen);

  return (
    <Box>
      <Header subtitle="Order history" />
    </Box>
  );
};
