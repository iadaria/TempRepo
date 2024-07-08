import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Menu } from '@src/5_entities/shop/shop.types';
import { MENUS } from 'mock/data/menu.data';
import { Box } from '@src/6_shared/ui/Box';
import { FilterHeader } from '@src/4_features/FilterHeader';
import { AppText } from '@src/6_shared/ui/AppText';
import { Menus } from '@src/4_features/menu/Menus';

export function ShopMenusScreen() {
  const menus: Menu[] = MENUS;
  return (
    <Box>
      <FilterHeader />
      <AppText h4 bold>
        Popular Menu
      </AppText>
      <Menus flat menus={menus} />
    </Box>
  );
}

const styles = StyleSheet.create({});
