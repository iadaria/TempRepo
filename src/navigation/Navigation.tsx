import { selectIsAuthenticated } from '@src/features/auth/authSlice';
import { AuthScreen } from '@src/screens/auth/login/AuthScreen';
import { ShopHome } from '@src/screens/shop/home/ShopHome';
import React from 'react';
import { useSelector } from 'react-redux';

export const Navigation = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  return isAuthenticated ? <ShopHome /> : <AuthScreen />;
};