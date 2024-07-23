import { useFocus } from '@src/1_app/navigations/model/lib/hooks/useFocus';
import { Header } from '@src/4_features/Header';
import { Menus } from '@src/4_features/menu/Menus';
import { focusCartScreen } from '@src/5_entities/cart/cart.services';
import { selectCartItems, selectPrices } from '@src/5_entities/cart/cart.slice';
import { HistoryIcon } from '@src/6_shared/assets/icons';
import { Pattern3 } from '@src/6_shared/assets/images';
import { AppText } from '@src/6_shared/ui/AppText';
import { Box } from '@src/6_shared/ui/Box';
import { Button } from '@src/6_shared/ui/Button';
import { IButton } from '@src/6_shared/ui/IButton';
import { Row } from '@src/6_shared/ui/Row/Row';
import React from 'react';
import { ImageBackground } from 'react-native';
import { useSelector } from 'react-redux';
import { styles } from './CartScreenStyles';
import { navigate } from '@src/1_app/navigations/RootNavigation';
import { routes } from '@src/6_shared/consts/routes';

const OrderPriceAndPlace = () => {
  const { total, totalDiscount, totalPrice } = useSelector(selectPrices, {
    devModeChecks: { stabilityCheck: 'never' },
  });

  const disabled = total <= 0;

  return (
    <ImageBackground source={Pattern3} resizeMode="cover" style={styles.total}>
      <Row>
        <AppText h5>Sub-Total</AppText>
        <AppText h5>{totalPrice} $</AppText>
      </Row>
      <Row>
        <AppText h5>Discount</AppText>
        <AppText h5>{totalDiscount.toFixed(2)} $</AppText>
      </Row>
      <Row style={{ marginTop: 15 }}>
        <AppText bold h4>
          Total
        </AppText>
        <AppText bold h4>
          {total} $
        </AppText>
      </Row>
      <Button disabled={disabled} style={styles.btnOrder}>
        <AppText green bold h5>
          Place my Order
        </AppText>
      </Button>
    </ImageBackground>
  );
};

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
      <Menus
        flat
        menus={cartItems}
        footer={<OrderPriceAndPlace />}
        footerStyle={styles.footer}
      />
    </Box>
  );
};
