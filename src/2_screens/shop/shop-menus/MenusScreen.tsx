import { useFocus } from '@src/1_app/navigations/model/lib/hooks/useFocus';
import { FilterHeader } from '@src/4_features/FilterHeader';
import { Menus } from '@src/4_features/menu/Menus';
import { focusMenusScreen } from '@src/5_entities/shop/shop.services';
import { selectMenus } from '@src/5_entities/shop/shop.slice';
import { AppText } from '@src/6_shared/ui/AppText';
import { Box } from '@src/6_shared/ui/Box';
import React from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

export function MenusScreen() {
  useFocus(focusMenusScreen);
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
