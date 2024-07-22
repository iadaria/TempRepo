import { useAppDispatch } from '@src/1_app/hooks';
import { useFocus } from '@src/1_app/navigations/model/lib/hooks/useFocus';
import { Header } from '@src/4_features/Header';
import { Menus } from '@src/4_features/menu/Menus';
import { focusCartScreen } from '@src/5_entities/cart/cart.services';
import { selectCartItems, selectPrices } from '@src/5_entities/cart/cart.slice';
import { Pattern3 } from '@src/6_shared/assets/images';
import { AppText } from '@src/6_shared/ui/AppText';
import { Box } from '@src/6_shared/ui/Box';
import { Button } from '@src/6_shared/ui/Button';
import { Row } from '@src/6_shared/ui/Row/Row';
import React from 'react';
import { ImageBackground, View } from 'react-native';
import { useSelector } from 'react-redux';
import { styles } from './CartScreenStyles';

const OrderPriceAndPlace = () => {
  const { total, totalDiscount, totalPrice } = useSelector(selectPrices, {
    devModeChecks: { stabilityCheck: 'never' },
  });
  const discount = (((totalDiscount * 1) / 100) * totalPrice).toFixed(2);
  return (
    <ImageBackground source={Pattern3} resizeMode="cover" style={styles.total}>
      <Row>
        <AppText h5>Sub-Total</AppText>
        <AppText h5>{totalPrice} $</AppText>
      </Row>
      <Row>
        <AppText h5>Discount</AppText>
        <AppText h5>{discount} $</AppText>
      </Row>
      <Row style={{ marginTop: 15 }}>
        <AppText bold h4>
          Total
        </AppText>
        <AppText bold h4>
          {total} $
        </AppText>
      </Row>
      <Button style={styles.btnOrder}>
        <AppText green bold h5>
          Place my Order
        </AppText>
      </Button>
    </ImageBackground>
  );
};

export const CartScreen = () => {
  const dispatch = useAppDispatch();
  const cartItems = useSelector(selectCartItems);

  useFocus(focusCartScreen);

  return (
    <Box>
      <Header text="Order details" />
      <Menus
        flat
        menus={cartItems}
        footer={<OrderPriceAndPlace />}
        footerStyle={styles.footer}
      />
    </Box>
  );
};
