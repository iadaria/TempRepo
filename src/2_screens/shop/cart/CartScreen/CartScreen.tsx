import { useFocus } from '@src/1_app/navigations/model/lib/hooks/useFocus';
import { navigate } from '@src/1_app/navigations/RootNavigation';
import { Header } from '@src/4_features/Header';
import { Menus } from '@src/4_features/menu/Menus';
import { focusCartScreen } from '@src/5_entities/cart/cart.services';
import { selectCartItems } from '@src/5_entities/cart/cart.slice';
import { HistoryIcon } from '@src/6_shared/assets/icons';
import { routes } from '@src/6_shared/consts/routes';
import { Box } from '@src/6_shared/ui/Box';
import { IButton } from '@src/6_shared/ui/IButton';
import React from 'react';
import { useSelector } from 'react-redux';
import { PriceAndOrder } from '../PriceAndOrder';
import { CartGUI } from '../CartGUI';

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
      <Menus flat menus={cartItems} footer={<PriceAndOrder />} gui={CartGUI} />
    </Box>
  );
};
