import { useAppDispatch } from '@src/1_app/hooks';
import { fetchCart } from '@src/5_entities/cart/cart.services';
import { selectCartItems } from '@src/5_entities/cart/cart.slice';
import { log } from '@src/6_shared/lib/debug/log';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';

export const CartScreen = () => {
  const dispatch = useAppDispatch();
  const cartItems = useSelector(selectCartItems);

  useEffect(() => {
    dispatch(fetchCart());
  }, []);

  log(CartScreen.name, { cartItems });

  return (
    <View>
      <Text>CartScreen</Text>
    </View>
  );
};
