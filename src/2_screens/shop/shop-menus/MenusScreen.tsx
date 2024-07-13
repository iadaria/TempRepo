import { FilterHeader } from '@src/4_features/FilterHeader';
import { Menus } from '@src/4_features/menu/Menus';
import { selectMenus } from '@src/5_entities/shop/shop.slice';
import { AppText } from '@src/6_shared/ui/AppText';
import { Box } from '@src/6_shared/ui/Box';
import React from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

export function MenusScreen() {
  const menus = useSelector(selectMenus);

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
