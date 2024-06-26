import { selectMswEnabled } from '@src/1_app/services/msw';
import { selectIsAuthenticated } from '@src/5_entities/auth/auth.slice';
import { AuthScreen } from '@src/2_screens/auth/login/AuthScreen';
import React from 'react';
import { useSelector } from 'react-redux';
import { ShopHomeScreen } from '@src/2_screens/shop/shop-home';

export const Navigation = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const msw = useSelector(selectMswEnabled); // TODO move into another component

  const Nav = () => (isAuthenticated ? <ShopHomeScreen /> : <AuthScreen />);

  return <Nav />;
};
