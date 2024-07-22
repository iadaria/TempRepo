import { useAppDispatch } from '@src/1_app/hooks';
import { useFocus } from '@src/1_app/navigations/model/lib/hooks/useFocus';
import { FilterHeader } from '@src/4_features/FilterHeader';
import { Header } from '@src/4_features/Header';
import { Menus } from '@src/4_features/menu/Menus';
import { focusCartScreen } from '@src/5_entities/cart/cart.services';
import { selectCartItems } from '@src/5_entities/cart/cart.slice';
import { AppText } from '@src/6_shared/ui/AppText';
import { Box } from '@src/6_shared/ui/Box';
import React from 'react';
import { Text } from 'react-native';
import { useSelector } from 'react-redux';

export const CartScreen = () => {
  const dispatch = useAppDispatch();
  const cartItems = useSelector(selectCartItems);

  useFocus(focusCartScreen);

  const footer = <AppText>Hi</AppText>;

  return (
    <Box>
      <Header text="Order details" />
      <Menus flat menus={cartItems} footer={footer} />
    </Box>
  );
};
