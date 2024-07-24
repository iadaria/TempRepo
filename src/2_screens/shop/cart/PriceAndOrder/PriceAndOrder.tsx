import { selectPrices } from '@src/5_entities/cart/cart.slice';
import { Pattern3 } from '@src/6_shared/assets/images';
import { AppText } from '@src/6_shared/ui/AppText';
import { Button } from '@src/6_shared/ui/Button';
import { Row } from '@src/6_shared/ui/Row/Row';
import React from 'react';
import { ImageBackground } from 'react-native';
import { useSelector } from 'react-redux';
import { styles } from './PriceAndOrderStyle';

export const PriceAndOrder = () => {
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
