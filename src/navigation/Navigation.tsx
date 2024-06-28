import { selectMswEnabled } from '@src/1 app/services/msw';
import { selectIsAuthenticated } from '@src/entities/auth/auth.slice';
import { AuthScreen } from '@src/screens/auth/login/AuthScreen';
import { ShopHome } from '@src/screens/shop/shop-home/ShopHome';
import React from 'react';
import { useSelector } from 'react-redux';

export const Navigation = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const msw = useSelector(selectMswEnabled); // TODO move into another component

  const Nav = () => (isAuthenticated ? <ShopHome /> : <AuthScreen />);

  return <Nav />;
};
