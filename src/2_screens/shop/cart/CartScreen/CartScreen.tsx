import { useFocus } from '@src/1_app/navigations/model/lib/hooks/useFocus';
import { Header } from '@src/4_features/Header';
import { Menus } from '@src/4_features/menu/Menus';
import { cartAdd, focusCartScreen } from '@src/5_entities/cart/cart.services';
import { selectCartItems, selectStatus } from '@src/5_entities/cart/cart.slice';
import { HistoryIcon, MinusIcon, PlusIcon } from '@src/6_shared/assets/icons';
import { Box } from '@src/6_shared/ui/Box';
import { IButton } from '@src/6_shared/ui/IButton';
import React from 'react';
import { useSelector } from 'react-redux';
import { navigate } from '@src/1_app/navigations/RootNavigation';
import { routes } from '@src/6_shared/consts/routes';
import { PriceAndOrder } from '../PriceAndOrder';
import { useAppDispatch } from '@src/1_app/hooks';
import { CartItem } from '@src/5_entities/cart/cart.types';
import { StyleSheet } from 'react-native';
import { AppText } from '@src/6_shared/ui/AppText';
import { Row } from '@src/6_shared/ui/Row/Row';
import { Button } from '@src/6_shared/ui/Button';
import { OrderGUI } from '../OrderGUI';

export const CartScreen = () => {
  const cartItems = useSelector(selectCartItems);

  useFocus(focusCartScreen);

  return (
    <Box>
      <Header subtitle="Order details">
        <IButton
          icon={HistoryIcon}
          onPress={() => navigate(routes.cart.OrderHistory)}
        />
      </Header>
      <Menus flat menus={cartItems} footer={<PriceAndOrder />} gui={OrderGUI} />
    </Box>
  );
};
