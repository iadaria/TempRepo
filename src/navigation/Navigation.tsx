import { selectIsAuthenticated } from '@src/features/auth/auth.slice';
import { AuthScreen } from '@src/screens/auth/login/AuthScreen';
import { ShopHome } from '@src/screens/shop/home/ShopHome';
import React from 'react';
import { useSelector } from 'react-redux';

export const Navigation = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  return isAuthenticated ? <ShopHome /> : <AuthScreen />;
};
